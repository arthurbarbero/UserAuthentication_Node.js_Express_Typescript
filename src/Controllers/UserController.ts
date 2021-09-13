import { Request, Response } from 'express'
import UserService from '../Services/User/UserService'
import BaseResponse from './BaseResponse'

class UserController {
  private userService: UserService
  constructor () {
    this.userService = new UserService()
  }

  public async getAll (req: Request, res: Response): Promise<Response> {
    const includeDeleted = req.query.includeDeleted !== 'true'
    const users = await this.userService.getAll(includeDeleted)

    res.status(this.userService.ResponseService.status)
    const response = new BaseResponse(
      this.userService.ResponseService.error,
      this.userService.ResponseService.message,
      users
    )

    return res.json(response.getDefaultResponse())
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    const userId = parseInt(req.params.id)
    const findedUser = await this.userService.getById(userId)

    res.status(this.userService.ResponseService.status)

    return res.json(new BaseResponse(
      this.userService.ResponseService.error,
      this.userService.ResponseService.message,
      findedUser
    ).getDefaultResponse())
  }

  public async create (req: Request, res:Response): Promise<Response> {
    const newUser = await this.userService.create(req.body)
    res.status(this.userService.ResponseService.status)

    return res.json(
      new BaseResponse(
        this.userService.ResponseService.error,
        this.userService.ResponseService.message,
        newUser
      ).getDefaultResponse())
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const userId = parseInt(req.params.id)
    const deleted = await this.userService.deleteById(userId)

    return res.status(
      this.userService.ResponseService.status
    ).json(
      new BaseResponse(
        this.userService.ResponseService.error,
        this.userService.ResponseService.message,
        deleted
      ).getDefaultResponse()
    )
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const updatedUser = await this.userService.update(req.body.id, req.body)

    return res.status(
      this.userService.ResponseService.status
    ).json(
      new BaseResponse(
        this.userService.ResponseService.error,
        this.userService.ResponseService.message,
        updatedUser
      ).getDefaultResponse()
    )
  }
}

export default UserController
