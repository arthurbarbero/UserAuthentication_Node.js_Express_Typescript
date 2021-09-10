import { Router } from 'express'
import UserController from './Controllers/UserController'

const routes = Router()

routes.get('/users', UserController.getAll)
routes.get('/users/:id', UserController.getById)
routes.post('/users', UserController.create)
routes.put('/users', UserController.update)
routes.delete('/users/:id', UserController.delete)

export default routes
