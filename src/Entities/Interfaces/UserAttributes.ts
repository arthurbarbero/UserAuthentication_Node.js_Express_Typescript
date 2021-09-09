import { Optional } from 'sequelize'

export interface UserAttributes {
  id: number
  name: string
  email: string
  password: string
}

export type UserInput = Optional<UserAttributes, 'id'>
export type UserOutput = Required<UserAttributes>
