import { EntityNotFound, EntityNotCreated } from '../Entities/Exceptions/EntityExceptions'
import { UserInput, UserOutput } from '../Entities/Interfaces/UserAttributes'
import User from '../Entities/Models/User'
import BaseRepository from './Interfaces/BaseRepository'
import LocaleService from '../i18n/i18n.config'

class UserRepository implements BaseRepository<UserInput, UserOutput> {
  public create (payload: UserInput): Promise<UserOutput> {
    return User.create(payload).catch(error => {
      throw new EntityNotCreated(LocaleService.translateReplace('NotCreated', { entidade: 'User', name: payload?.name, message: error.message }))
    })
  }

  public async update (id: number, payload: Partial<UserInput>): Promise<UserOutput> {
    const user = await User.findByPk(id)
    if (!user) {
      throw new EntityNotFound(
        LocaleService.translateReplace('NotFoundEntityUpdated', { entidade: 'User' })
      )
    }

    return (user as User).update(payload).catch(error => {
      throw new EntityNotCreated(LocaleService.translateReplace('NotUpdated', { entidade: 'User', name: payload?.name, message: error.message }))
    })
  }

  public async getById (id: number): Promise<UserOutput> {
    const user = await User.findByPk(id)
    if (!user) {
      throw new EntityNotFound(
        LocaleService.translateReplace('NotFoundEntitySearch', { entidade: 'User' })
      )
    }

    return user
  }

  public async deleteById (id: number): Promise<boolean> {
    const deletedUser = await !!User.destroy({ where: { id } })
    if (!deletedUser) {
      throw new EntityNotFound(
        LocaleService.translateReplace('NotFoundEntityDelete', { entidade: 'User' })
      )
    }

    return deletedUser
  }

  public getAll (includeDeleted = true): Promise<UserOutput[]> {
    return User.findAll({
      paranoid: includeDeleted
    })
  }
}

export default UserRepository
