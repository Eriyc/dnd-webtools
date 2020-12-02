import s from './CharacterCreator.module.scss'
import { CharacterSheet } from './sheet'

const CharacterCreator = () => {
  return (
    <section className={s.main}>
      <CharacterSheet />
    </section>
  )
}

export default CharacterCreator
