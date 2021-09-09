import { UserInput, UserOutput } from '../Entities/Interfaces/UserAttributes'
import UserRepository from '../Repositories/UserRepository'
import BaseService from './Interfaces/BaseService'
import ResponseService from './ResponseService'
import LocaleService from '../i18n/i18n.config'

class UserService implements BaseService<UserInput, UserOutput> {
  private readonly userRepository: UserRepository
  public ResponseService: ResponseService

  constructor () {
    this.userRepository = new UserRepository()
    this.ResponseService = new ResponseService(
      200,
      false,
      LocaleService.translate('ResponseOk')
    )
  }

  create (payload: UserInput): Promise<UserOutput> {
    try {
      return this.userRepository.create(payload)
    } catch (error) {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return null
    }
  }

  update (id: number, payload: UserInput): Promise<UserOutput> {
    try {
      return this.userRepository.update(id, payload)
    } catch (error) {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return null
    }
  }

  getById (id: number): Promise<UserOutput> {
    try {
      return this.userRepository.getById(id)
    } catch (error) {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return null
    }
  }

  deleteById (id: number): Promise<boolean> {
    try {
      return this.userRepository.deleteById(id)
    } catch (error) {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return Promise.resolve(false)
    }
  }

  getAll (includeDeleted: boolean): Promise<UserOutput[]> {
    try {
      return this.userRepository.getAll(includeDeleted)
    } catch (error) {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return null
    }
  }
}

export default new UserService()
