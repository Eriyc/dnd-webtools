import { useSelector } from 'react-redux'
import { RootState } from 'src/store/rootReducer'
import { Button, Container } from '@chakra-ui/react'

import s from './LoggedInHome.module.scss'

const LoggedInHome = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <Container className={s.main} maxW="1170px">
      <h1>Welcome, {user.username}</h1>
      <section className={s.campaigns}>
        <h2>Campaigns</h2>
        <Button>Create New</Button>
      </section>
      <section className={s.adventures}>
        <h2>Characters</h2>
        <Button>Create New</Button>
      </section>
    </Container>
  )
}

export default LoggedInHome
