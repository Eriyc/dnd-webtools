import { Button, Input, Stack } from '@chakra-ui/react'
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
    <Stack as="form" onSubmit={authenticate} spacing={3} minW="16em" marginY="1em" id="login">
      <Input
        variant="flushed"
        placeholder="Email"
        id="email"
        onChange={setEmail}
        value={loginUser.email}
        type="email"
        autoComplete="email"
        focusBorderColor="green.500"
      />
      <Input
        variant="flushed"
        placeholder="Password"
        id="password"
        onChange={setPassword}
        value={loginUser.password}
        type="password"
        autoComplete="current-password"
        focusBorderColor="green.500"
      />
      <Button isDisabled={user.loading} type="submit">
        Login
      </Button>
    </Stack>
  )
}

export default Login
