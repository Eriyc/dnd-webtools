import mongoose, { Document, Model, Schema } from 'mongoose'

type CharacterClass = {
  name: string
  id: number
}

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  class: { type: Object, required: true },
})

export type Ability = {
  name: string
  mod: number
  value: number
}

export interface CharacterCreatorState {
  name: string
  abilities: Ability[]
}
