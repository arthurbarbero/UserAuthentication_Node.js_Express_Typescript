import { UserInput, UserOutput } from '../../Entities/Interfaces/UserAttributes'
import { encrypt, validate } from '../Base/EncryptDecryptHelper'
import UserRepository from '../../Repositories/UserRepository'
import BaseService from './Interfaces/BaseService'
import ResponseService from '../Base/ResponseService'
import LocaleService from '../../i18n/i18n.config'

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

  public async create (payload: UserInput): Promise<UserOutput> {
    payload.password = await encrypt(payload.password)
    return this.userRepository.create(payload)
      .catch(error => {
        this.ResponseService = new ResponseService(
          error.status,
          true,
          error.message
        )
        return null
      })
  }

  public update (id: number, payload: UserInput): Promise<UserOutput> {
    return this.userRepository.update(id, payload).catch(error => {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return null
    })
  }

  public getById (id: number): Promise<UserOutput> {
    return this.userRepository.getById(id).catch(error => {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return null
    })
  }

  public deleteById (id: number): Promise<boolean> {
    return this.userRepository.deleteById(id).catch(error => {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return Promise.resolve(false)
    })
  }

  public getAll (includeDeleted: boolean): Promise<UserOutput[]> {
    return this.userRepository.getAll(includeDeleted).catch(error => {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return null
    })
  }

  public async login (email:string, password:string): Promise<UserOutput> {
    const userLogged = await this.userRepository.getByEmail(email).catch(error => {
      this.ResponseService = new ResponseService(
        error.status,
        true,
        error.message
      )
      return null
    })

    if (await validate(await encrypt(password), userLogged.password)) {
      this.ResponseService = new ResponseService(
        400,
        true,
        LocaleService.translateReplace('WrongPassword', { email: email })
      )
      return null
    }

    return userLogged
  }
}

export default UserService
