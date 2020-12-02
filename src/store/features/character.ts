import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Ability, AbilityName, CharacterCreatorState, Skill, SkillName } from 'types/character'

const calcValue = (score: number, additional: number) => score + additional

const calcMod = (score: number, additional: number) => {
  let mod = 0

  if (score >= 10) {
    mod = Math.floor((score - 10) / 2)
  } else if (score > 7) mod = -1
  else if (score > 5) mod = -2
  else if (score > 3) mod = -3
  else if (score > 1) mod = -4
  else mod = -5
  return mod + additional
}

const skills = [
  { name: 'acrobatics', parent: 'dexterity' },
  { name: 'animal', parent: 'wisdom' },
  { name: 'arcana', parent: 'intelligence' },
  { name: 'athletics', parent: 'strength' },
  { name: 'deception', parent: 'charisma' },
  { name: 'history', parent: 'intelligence' },
  { name: 'insight', parent: 'wisdom' },
  { name: 'intimidation', parent: 'charisma' },
  { name: 'investigation', parent: 'intelligence' },
  { name: 'medicine', parent: 'wisdom' },
  { name: 'nature', parent: 'intelligence' },
  { name: 'perception', parent: 'wisdom' },
  { name: 'performance', parent: 'charisma' },
  { name: 'persuasion', parent: 'charisma' },
  { name: 'religion', parent: 'intelligence' },
  { name: 'sleight', parent: 'dexterity' },
  { name: 'stealth', parent: 'dexterity' },
  { name: 'survival', parent: 'wisdom' },
] as Skill[]

const initialState: CharacterCreatorState = {
  name: '',
  abilities: [
    { name: 'strength', mod: 0, value: 10, proficiency: 'none', saveMod: 0 },
    { name: 'dexterity', mod: 0, value: 10, proficiency: 'none', saveMod: 0 },
    { name: 'constitution', mod: 0, value: 10, proficiency: 'none', saveMod: 0 },
    { name: 'intelligence', mod: 0, value: 10, proficiency: 'none', saveMod: 0 },
    { name: 'wisdom', mod: 0, value: 10, proficiency: 'none', saveMod: 0 },
    { name: 'charisma', mod: 0, value: 10, proficiency: 'none', saveMod: 0 },
  ],
  skills: skills.map((s) => ({ bonus: 0, name: s.name, proficiency: 'none', parent: s.parent })),
}

type AbilityChange = { ability: AbilityName; value: number }

const campaignSlice = createSlice({
  initialState,
  name: 'campaign',
  reducers: {
    updateAbilityScore: (state, action: PayloadAction<AbilityChange>) => {
      const abilityIndex = state.abilities.findIndex((a) => a.name === action.payload.ability)

      const newAbility: Ability = {
        mod: calcMod(action.payload.value, 0),
        name: action.payload.ability,
        value: calcValue(action.payload.value, 0),
        proficiency: state.abilities[abilityIndex].proficiency,
        saveMod: state.abilities[abilityIndex].saveMod,
      }
      state.abilities[abilityIndex] = newAbility
      return state
    },
  },
  extraReducers: () => {},
})

export const { updateAbilityScore } = campaignSlice.actions
export default campaignSlice.reducer
