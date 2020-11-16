import { Container } from 'components'
import { useSelector } from 'react-redux'
import LandingHome from 'screens/Home/LandingHome'
import LoggedInHome from 'screens/Home/LoggedInHome'
import { RootState } from 'src/store/rootReducer'

export const Home = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  return (
    <Container maxWidth="1170px" fullWidth>
      {user._id ? <LoggedInHome /> : <LandingHome />}
    </Container>
  )
}

export default Home
