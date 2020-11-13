import { NextApiRequest, NextApiResponse } from 'next'
import User, { registerBodySchema, UserType } from 'types/user'
import { databaseConnection } from '../utils/database'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const validation = registerBodySchema.validate(JSON.parse(req.body))
    if (validation.error) return res.status(403).json({ type: 'error', error: validation.error })

    // no errors, therefore we can connect to database
    await databaseConnection()

    const data = JSON.parse(req.body) as { username: string; email: string; password: string }

    const emailExists = await User.findOne({ email: data.email })
    if (emailExists) return res.status(400).json({ type: 'error', error: 'Email already exists!' })

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(data.password, salt)

    const newUser: Omit<UserType, '_id'> = {
      account: 'free',
      campaigns: [],
      email: data.email,
      username: data.username,
    }

    const user = new User({
      password: hashPassword,
      ...newUser,
    })

    try {
      const savedUser = await user.save()

      const bodyUser: UserType = {
        _id: savedUser._id,
        account: savedUser.account,
        campaigns: savedUser.campaigns,
        email: savedUser.email,
        username: savedUser.username,
      }

      // user saved, return jsonwebtoken to log them in
      const token = jwt.sign({ ...bodyUser }, process.env.NEXT_PUBLIC_SECRET)
      res.setHeader('auth-token', token)

      res.status(200).json({ type: 'success', token: token, timestamp: Date.now() })
    } catch (error) {
      res.status(500).json({ type: 'error', errors: 'Internal server error', timestamp: Date.now() })
    }
  }
}

export default handler
