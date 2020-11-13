import { Button, Container, TextField } from 'components'
import { NextPage } from 'next'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authenticateUser, registerUser } from 'src/store/features/user'
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
    <>
      <form onSubmit={authenticate}>
        <TextField label="Email" onChange={setEmail} value={loginUser.email} type="email" />
        <TextField label="Password" onChange={setPassword} value={loginUser.password} type="password" />
        <Button disabled={user.loading}>Login</Button>
      </form>
    </>
  )
}

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
    <>
      <form onSubmit={finishSignUp}>
        <TextField label="Email" id="email" autoComplete="new-email" onChange={setEmail} value={newUser.email} type="email" />
        <TextField label="Username" id="new-username" autoComplete="new-username" onChange={setUsername} value={newUser.username} />
        <TextField label="Password" id="new-password" autoComplete="new-password" onChange={setPassword} value={newUser.password} type="password" />
        <Button disabled={user.loading}>Register</Button>
      </form>
    </>
  )
}

const Account = () => {
  const user = useSelector((state: RootState) => state.user)
  return (
    <Container>
      <h1>Welcome, {user.username}</h1>
      <p>You have {user.campaigns.length} campaigns</p>
    </Container>
  )
}

const Page: NextPage = () => {
  const [login, setLogin] = useState(true)
  const user = useSelector((state: RootState) => state.user)

  const [newUser, setNewUser] = useState({
    email: '',
    username: '',
    password: '',
  })
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })

  return (
    <>
      {user._id ? (
        <Account />
      ) : login ? (
        <Container maxWidth="28rem" padding={32}>
          <Login loginUser={loginUser} setLoginUser={setLoginUser} />
          <a onClick={() => setLogin(!login)} style={{ cursor: 'pointer' }}>
            Register instead
          </a>
        </Container>
      ) : (
        <Container maxWidth="28rem" padding={32}>
          <Register newUser={newUser} setNewUser={setNewUser} />
          <a onClick={() => setLogin(!login)} style={{ cursor: 'pointer' }}>
            Login instead
          </a>
        </Container>
      )}
    </>
  )
}

export default Page
