import { Button, TextField } from 'components'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateUser } from 'src/store/features/user'
import { RootState } from 'src/store/rootReducer'

type LoginProps = {
  loginUser: { email: string; password: string }
  setLoginUser: Dispatch<SetStateAction<{ email: string; password: string }>>
}
const Login = ({ loginUser, setLoginUser }: LoginProps) => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const authenticate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(authenticateUser(loginUser))
  }

  const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setLoginUser((s) => ({ ...s, password: value }))
  }

  const setEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setLoginUser((s) => ({ ...s, email: value }))
  }

  return (
    <form onSubmit={authenticate}>
      <TextField label="Email" onChange={setEmail} value={loginUser.email} type="email" />
      <TextField label="Password" onChange={setPassword} value={loginUser.password} type="password" />
      <Button disabled={user.loading}>Login</Button>
    </form>
  )
}

export default Login
