import { Request, Response } from 'express'
import AuthService from '../Services/Auth/AuthService'
import UserService from '../Services/User/UserService'
import BaseResponse from './BaseResponse'

class AuthController {
  private userService: UserService
  private authService: AuthService

  constructor () {
    this.userService = new UserService()
    this.authService = new AuthService()
  }

  public async auth (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const userLogged = await this.userService.login(email, password)

    let token = ''
    if (userLogged) { token = this.authService.createAuth(userLogged?.id) }

    return res.status(this.userService.ResponseService.status).json(
      new BaseResponse(
        this.userService.ResponseService.error,
        this.userService.ResponseService.message,
        {
          userLogged,
          token
        }
      )
    )
  }
}

export default AuthController
