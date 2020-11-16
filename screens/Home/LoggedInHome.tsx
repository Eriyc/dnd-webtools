import { useSelector } from 'react-redux'
import { RootState } from 'src/store/rootReducer'
import s from './LoggedInHome.module.scss'

const LoggedInHome = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <main className={s.main}>
      <h1>Welcome, {user.username}</h1>
      <section className={s.campaigns}>
		  <h2>Campaigns</h2>
	  </section>
      <section className={s.place}>
		  <h2>Placeholder</h2>
	  </section>
    </main>
  )
}

export default LoggedInHome
