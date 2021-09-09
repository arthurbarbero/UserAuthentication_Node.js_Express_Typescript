import { Request, Response } from 'express'
import UserService from '../Services/UserService'
import LocaleService from '../i18n/i18n.config'
import BaseResponse from './BaseResponse'

class UserController {
  public async getAll (req: Request, res: Response): Promise<Response> {
    const includeDeleted = req.query.includeDeleted === 'true'
    const users = await UserService.getAll(includeDeleted)

    res.status(UserService.ResponseService.status)
    const response = new BaseResponse(
      UserService.ResponseService.error,
      LocaleService.translate('ResponseOk'),
      users
    )

    return res.json(response.getDefaultResponse())
  }
}

export default new UserController()
