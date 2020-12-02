import { Button, Input, Stack } from '@chakra-ui/react'
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
    <Stack as="form" onSubmit={finishSignUp} minW="16em" spacing={3} marginY="1em" id="register">
      <Input
        label="Email"
        placeholder="Email"
        id="email"
        autoComplete="new-email"
        onChange={setEmail}
        value={newUser.email}
        type="email"
        variant="flushed"
        focusBorderColor="green.500"
      />
      <Input
        label="Username"
        id="new-username"
        placeholder="Username"
        autoComplete="new-username"
        onChange={setUsername}
        value={newUser.username}
        variant="flushed"
        focusBorderColor="green.500"
      />
      <Input
        label="Password"
        id="new-password"
        placeholder="Password"
        autoComplete="new-password"
        onChange={setPassword}
        value={newUser.password}
        type="password"
        variant="flushed"
        focusBorderColor="green.500"
      />
      <Button disabled={user.loading} type="submit">
        Register
      </Button>
    </Stack>
  )
}

export default Register
