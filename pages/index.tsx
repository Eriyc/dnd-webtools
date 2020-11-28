import { useSelector } from 'react-redux'
import LandingHome from 'screens/Home/LandingHome'
import LoggedInHome from 'screens/Home/LoggedInHome'
import { RootState } from 'src/store/rootReducer'

export const Home = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  return user._id ? <LoggedInHome /> : <LandingHome />
}

export default Home
