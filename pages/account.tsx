import dynamic from 'next/dynamic'
import Overview from 'screens/Account/Overview'
import s from 'screens/Account/layout.module.scss'
import { Container } from '@chakra-ui/react'
import { NextPage } from 'next'
import { RootState } from 'src/store/rootReducer'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Login = dynamic(() => import('screens/Account/Login'))
const Register = dynamic(() => import('screens/Account/Register'), {})

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

  console.log(user)

  return user._id ? (
    <Overview />
  ) : login ? (
    <Container className={s.login} as="main" maxW="18em">
      <h2>Login</h2>
      <Login loginUser={loginUser} setLoginUser={setLoginUser} />
      <a onClick={() => setLogin(!login)} style={{ cursor: 'pointer' }}>
        Register instead
      </a>
    </Container>
  ) : (
    <Container className={s.register} as="main" maxW="18em">
      <h2>Register</h2>
      <Register newUser={newUser} setNewUser={setNewUser} />
      <a onClick={() => setLogin(!login)} style={{ cursor: 'pointer' }}>
        Login instead
      </a>
    </Container>
  )
}

export default Page
