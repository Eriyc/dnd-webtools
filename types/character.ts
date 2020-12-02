import { Schema } from 'mongoose'

type CharacterClass = {
  name: string
  id: number
}

export const CharacterSchema = new Schema({
  name: { type: String, required: true },
  class: { type: Object, required: true },
})

export type SkillName =
  | 'acrobatics'
  | 'animal'
  | 'arcana'
  | 'athletics'
  | 'deception'
  | 'history'
  | 'insight'
  | 'intimidation'
  | 'investigation'
  | 'medicine'
  | 'nature'
  | 'perception'
  | 'performance'
  | 'persuasion'
  | 'religion'
  | 'sleight'
  | 'stealth'
  | 'survival'

export type AbilityName = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'

export type Ability = {
  name: AbilityName
  mod: number
  value: number
  proficiency: 'none' | 'proficient' | 'expertise'
  saveMod: number
}

export type Skill = {
  name: SkillName
  parent: AbilityName
  proficiency: 'none' | 'proficient' | 'expertise'
  bonus: number
}

export interface CharacterCreatorState {
  name: string
  abilities: Ability[]
  skills: Skill[]
}
