import { Router } from 'express'
import AuthController from './Controllers/AuthController'
import UserController from './Controllers/UserController'
import validateToken from './Middleware/verifyToken'

const routes = Router()

// Auth
routes.post('/auth', AuthController.auth)

// Users
routes.get('/users', validateToken, UserController.getAll)
routes.get('/users/:id', validateToken, UserController.getById)
routes.post('/users', UserController.create)
routes.put('/users', validateToken, UserController.update)
routes.delete('/users/:id', validateToken, UserController.delete)

export default routes
