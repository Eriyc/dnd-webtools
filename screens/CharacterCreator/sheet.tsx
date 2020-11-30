import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/store/rootReducer'
import s from './CharacterSheet.module.scss'
import type { Ability } from 'types/character'

const AbilityView = (props: Ability) => {
  return (
    <span className={s.abilityBox}>
      <label>{props.name}</label>
      <input value={props.value} type="number" />
      <p>{props.mod}</p>
    </span>
  )
}

export const CharacterSheet = () => {
  const character = useSelector((state: RootState) => state.character)
  const dispatch = useDispatch()

  return (
    <main className={s.sheet}>
      <section>
        {character.abilities.map((ability) => (
          <AbilityView key={ability.name + 'Score'} {...ability} />
        ))}
      </section>
    </main>
  )
}
