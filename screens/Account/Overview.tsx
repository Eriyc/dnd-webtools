import { Button, Container } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from 'src/store/features/user'
import { RootState } from 'src/store/rootReducer'
import s from './layout.module.scss'

const Account = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  return (
    <Container className={s.overviewContainer} as="section" maxW="1170px">
      <h1>Welcome, {user.username}</h1>
      <p>You have {user.campaigns.length} campaigns</p>
      <Button onClick={() => dispatch(signOutUser())}>Sign Out</Button>
    </Container>
  )
}

export default Account
