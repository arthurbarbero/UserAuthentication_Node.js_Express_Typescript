import { Router } from 'express'
import UserController from './Controllers/UserController'

const routes = Router()

routes.use('/users', UserController.getAll)

export default routes
