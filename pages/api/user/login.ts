import { NextApiRequest, NextApiResponse } from 'next'
import User, { loginBodySchema, UserType } from 'types/user'
import { databaseConnection } from '../utils/database'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const credentials = JSON.parse(req.body)

    // verify with joi
    const validation = loginBodySchema.validate(credentials)
    if (validation.error) return res.status(403).json({ type: 'error', error: validation.error })

    // no errors, therefore we can connect to database
    await databaseConnection()

    const dbUser = await User.findOne({ email: credentials.email })
    if (!dbUser) {
      return res.json({ type: 'error', error: 'Email or password error' })
    }

    const validPass = await bcrypt.compare(credentials.password, dbUser.password)
    const salt = await bcrypt.genSalt()
    const newPass = await bcrypt.hash(credentials.password, salt)
    if (!validPass) return res.status(400).json({ type: 'error', message: 'Email or password incorrect', newPass })

    const user: UserType = {
      _id: dbUser._id,
      account: dbUser.account,
      campaigns: dbUser.campaigns,
      email: dbUser.email,
      username: dbUser.username,
    }

    // Create and assign JSON Web Token
    const token = jwt.sign({ ...user }, process.env.NEXT_PUBLIC_SECRET)
    res.setHeader('auth-token', token)

    res.status(200).json({ type: 'success', token: token, timestamp: Date.now() })
  }
}

export default handler
