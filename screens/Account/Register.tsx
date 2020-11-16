import { Button, TextField } from 'components'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from 'src/store/features/user'
import { RootState } from 'src/store/rootReducer'

type RegisterProps = {
  newUser: { email: string; password: string; username: string }
  setNewUser: Dispatch<SetStateAction<{ email: string; password: string }>>
}
const Register = ({ newUser, setNewUser }: RegisterProps) => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const finishSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(registerUser(newUser))
  }

  const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setNewUser((s) => ({ ...s, password: value }))
  }

  const setEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setNewUser((s) => ({ ...s, email: value }))
  }

  const setUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setNewUser((s) => ({ ...s, username: value }))
  }

  return (
    <form onSubmit={finishSignUp}>
      <TextField label="Email" id="email" autoComplete="new-email" onChange={setEmail} value={newUser.email} type="email" />
      <TextField label="Username" id="new-username" autoComplete="new-username" onChange={setUsername} value={newUser.username} />
      <TextField label="Password" id="new-password" autoComplete="new-password" onChange={setPassword} value={newUser.password} type="password" />
      <Button disabled={user.loading}>Register</Button>
    </form>
  )
}

export default Register
