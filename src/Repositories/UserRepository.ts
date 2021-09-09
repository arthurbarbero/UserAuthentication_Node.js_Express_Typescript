import EntityNotFound from '../Entities/Exceptions/EntityNotFound'
import { UserAttributes, UserInput, UserOutput } from '../Entities/Interfaces/UserAttributes'
import User from '../Entities/Models/User'
import BaseRepository from './Interfaces/BaseRepository'
import LocaleService from '../i18n/i18n.config'

class UserRepository implements BaseRepository<UserInput, UserOutput> {
  public create (payload: UserInput): Promise<Required<UserAttributes>> {
    return User.create(payload)
  }

  public async update (id: number, payload: Partial<UserInput>): Promise<Required<UserAttributes>> {
    const user = await User.findByPk(id)
    if (!user) {
      throw new EntityNotFound(
        LocaleService.translateReplace('NotFoundEntity', { entidade: 'User' })
      )
    }

    return (user as User).update(payload)
  }

  public async getById (id: number): Promise<Required<UserAttributes>> {
    const user = await User.findByPk(id)
    if (!user) {
      throw new EntityNotFound(
        LocaleService.translateReplace('NotFoundEntity', { entidade: 'User' })
      )
    }

    return user
  }

  public async deleteById (id: number): Promise<boolean> {
    const deletedUser = await User.destroy({ where: { id } })

    return !!deletedUser
  }

  public getAll (includeDeleted = false): Promise<Required<UserAttributes>[]> {
    return User.findAll({
      paranoid: includeDeleted
    })
  }
}

export default UserRepository
