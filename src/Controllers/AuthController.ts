import { Request, Response } from 'express'
import AuthService from '../Services/Auth/AuthService'
import UserService from '../Services/User/UserService'
import BaseResponse from './BaseResponse'

class AuthController {
  public async auth (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const userLogged = await UserService.login(email, password)

    let token = ''
    if (userLogged) { token = await AuthService.createAuth(userLogged?.id) }

    return res.status(UserService.ResponseService.status).json(
      new BaseResponse(
        UserService.ResponseService.error,
        UserService.ResponseService.message,
        {
          userLogged,
          token
        }
      )
    )
  }
}

export default new AuthController()
