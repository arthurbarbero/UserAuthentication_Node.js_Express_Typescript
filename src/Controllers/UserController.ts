import { Request, Response } from 'express'
import UserService from '../Services/UserService'
import BaseResponse from './BaseResponse'

class UserController {
  public async getAll (req: Request, res: Response): Promise<Response> {
    const includeDeleted = req.query.includeDeleted !== 'true'
    const users = await UserService.getAll(includeDeleted)

    res.status(UserService.ResponseService.status)
    const response = new BaseResponse(
      UserService.ResponseService.error,
      UserService.ResponseService.message,
      users
    )

    return res.json(response.getDefaultResponse())
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    const userId = parseInt(req.params.id)
    const findedUser = await UserService.getById(userId)

    res.status(UserService.ResponseService.status)

    return res.json(new BaseResponse(
      UserService.ResponseService.error,
      UserService.ResponseService.message,
      findedUser
    ).getDefaultResponse())
  }

  public async create (req: Request, res:Response): Promise<Response> {
    const newUser = await UserService.create(req.body)
    res.status(UserService.ResponseService.status)

    return res.json(
      new BaseResponse(
        UserService.ResponseService.error,
        UserService.ResponseService.message,
        newUser
      ).getDefaultResponse())
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const userId = parseInt(req.params.id)
    const deleted = await UserService.deleteById(userId)

    return res.status(
      UserService.ResponseService.status
    ).json(
      new BaseResponse(
        UserService.ResponseService.error,
        UserService.ResponseService.message,
        deleted
      ).getDefaultResponse()
    )
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const updatedUser = await UserService.update(req.body.id, req.body)

    return res.status(
      UserService.ResponseService.status
    ).json(
      new BaseResponse(
        UserService.ResponseService.error,
        UserService.ResponseService.message,
        updatedUser
      ).getDefaultResponse()
    )
  }
}

export default new UserController()
