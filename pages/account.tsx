import { Container } from 'components'
import { NextPage } from 'next'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/rootReducer'
import Overview from 'screens/Account/Overview'
import dynamic from 'next/dynamic'

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

  return (
    <>
      {user._id ? (
        <Overview />
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
