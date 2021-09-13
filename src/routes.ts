import { Router, Request, Response } from 'express'
import AuthController from './Controllers/AuthController'
import UserController from './Controllers/UserController'
import validateToken from './Middleware/verifyToken'

const routes = Router()

// Auth
routes.post(
  '/auth',
  (req: Request, res: Response) => new AuthController().auth(req, res)
)

// Users
routes.get(
  '/users',
  validateToken,
  (req: Request, res: Response) => new UserController().getAll(req, res)
)
routes.get(
  '/users/:id',
  validateToken,
  (req: Request, res: Response) => new UserController().getById(req, res)
)
routes.post(
  '/users',
  (req: Request, res: Response) => new UserController().create(req, res)
)
routes.put(
  '/users',
  validateToken,
  (req: Request, res: Response) => new UserController().update(req, res)
)
routes.delete(
  '/users/:id',
  validateToken,
  (req: Request, res: Response) => new UserController().delete(req, res)
)

export default routes
