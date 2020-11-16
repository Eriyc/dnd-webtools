import { Container } from 'components'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/rootReducer'

const Account = () => {
  const user = useSelector((state: RootState) => state.user)
  return (
    <Container maxWidth="1170px" fullWidth>
      <h1>Welcome, {user.username}</h1>
      <p>You have {user.campaigns.length} campaigns</p>
    </Container>
  )
}

export default Account
