import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/store/rootReducer'
import s from './CharacterSheet.module.scss'
import type { Ability, AbilityName, Skill } from 'types/character'
import { updateAbilityScore } from 'src/store/features/character'

interface AbilityProps {
  onChange: (name: string, value: number, e: React.ChangeEvent<HTMLInputElement>) => void
}

const AbilityView = (props: Ability & AbilityProps) => {
  return (
    <span className={s.abilityBox}>
      <h4>{props.name}</h4>
      <input
        value={props.value}
        id={props.name}
        min={0}
        max={30}
        type="number"
        onChange={(e) => props.onChange(props.name, e.currentTarget.valueAsNumber, e)}
      />
      <div className={s.modifier}>
        <span className={s.mod} title="Modifier">
          {props.mod}
        </span>
        <a>{props.proficiency === 'none' ? '*' : '| |'}</a>
        <span className={s.save} title="Saving Throw">
          {props.saveMod}
        </span>
      </div>
    </span>
  )
}

const SkillView = (props: Skill) => {
  const character = useSelector((state: RootState) => state.character)
  const parentIndex = character.abilities.findIndex((a) => a.name === props.parent)
  const skillMod: number = character.abilities[parentIndex].mod + (props.proficiency === 'proficient' ? 2 : props.proficiency === 'expertise' ? 4 : 0)
  const passive = 10 + skillMod

  return (
    <li className={s.skill}>
      <a className={s.skillProficiency}></a>
      <p className={s.skillName}>{props.name}</p>
      <p className={s.skillParent}>{props.parent.substring(0, 3)}</p>
      <p className={s.skillBonus}>
        {skillMod + props.bonus >= 0 && '+'}
        {skillMod + props.bonus}
      </p>
      <p className={s.skillPassive}>({passive})</p>
    </li>
  )
}

export const CharacterSheet = () => {
  const character = useSelector((state: RootState) => state.character)
  const dispatch = useDispatch()

  const onAbilityChange = (name: AbilityName, value: number, _e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateAbilityScore({ ability: name, value }))
  }

  return (
    <main className={s.sheetBody}>
      <section className={s.abilities}>
        {character.abilities.map((ability) => (
          <AbilityView key={ability.name + 'Score'} {...ability} onChange={onAbilityChange} />
        ))}
      </section>
      <ul className={s.skills}>
        {character.skills.map((skill) => (
          <SkillView key={skill.name} {...skill} />
        ))}
      </ul>
      <section className={s.attributes}></section>
    </main>
  )
}
