import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import CharacterCreator from 'screens/CharacterCreator'
import { RootState } from 'src/store/rootReducer'

const CharacterCreatorPage: NextPage = () => {
  const user = useSelector((state: RootState) => state.user)

  if (!user._id) {
    return
  }

  return <CharacterCreator />
}

export default CharacterCreatorPage
