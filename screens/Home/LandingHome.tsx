import { Container } from '@chakra-ui/react'
import s from './LandingHome.module.scss'

const LandingHome = () => {
  return (
    <Container className={s.main} maxW="1170px">
      <h1>Welcome to DND-WEBTOOLS</h1>
    </Container>
  )
}

export default LandingHome
