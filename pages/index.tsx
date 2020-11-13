import { Container } from 'components'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/rootReducer'

export const Home = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  return (
    <Container className="container">
      <h1>DND Webtools</h1>
      <p>{user.email}</p>
    </Container>
  )
}

export default Home
