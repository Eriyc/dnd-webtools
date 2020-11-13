import { Button, Container, TextField } from 'components'
import { NextPage } from 'next'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from 'src/store/features/user'
import { RootState } from 'src/store/rootReducer'
import jwt from 'jsonwebtoken'

type LoginProps = {
  loginUser: { email: string; password: string }
  setLoginUser: Dispatch<SetStateAction<{ email: string; password: string }>>
}
const Login = ({ loginUser, setLoginUser }: LoginProps) => {
  const dispatch = useDispatch()

  const authenticate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify(loginUser),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.type === 'success') {
          jwt.verify(json.token, process.env.NEXT_PUBLIC_SECRET, (err, decode) => {
            if (!err) {
              dispatch(setUser(decode))
            }
          })
        }
      })
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
        <Button>Login</Button>
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

  const registerUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('/api/user/register', {
      method: 'POST',
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        if (json.type === 'success') {
          jwt.verify(json.token, process.env.NEXT_PUBLIC_SECRET, (err, decode) => {
            if (!err) {
              dispatch(setUser(decode))
            }
          })
        }
      })
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
      <form onSubmit={registerUser}>
        <TextField label="Email" id="email" autoComplete="new-email" onChange={setEmail} value={newUser.email} type="email" />
        <TextField label="Username" id="new-username" autoComplete="new-username" onChange={setUsername} value={newUser.username} />
        <TextField label="Password" id="new-password" autoComplete="new-password" onChange={setPassword} value={newUser.password} type="password" />
        <Button>Register</Button>
      </form>
    </>
  )
}

const Account = () => {
  return <></>
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
    <Container background={{ color: '#121212', elevation: 0 }} height="100vh">
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
      <p>{user.email}</p>
    </Container>
  )
}

export default Page
