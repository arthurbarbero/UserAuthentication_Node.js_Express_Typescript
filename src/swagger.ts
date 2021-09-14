import { CreateUser, GetAllUsers, GetUserById, DeleteById, UpdateById } from './Services/User/UserService.swagger'

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Node+Express+Typescrypt',
    description: 'Simple application to demonstrate my knowledge in creating NodeJs applications',
    termsOfService: '',
    contact: {
      name: 'Arthur Barbero',
      email: 'arthur-barbero@hotmail.com',
      url: 'https://github.com/arthurbarbero'
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  components: {
    schemas: {},
    securitySchemes: {
      bearerAuth: {
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  tags: [
    {
      name: 'Users'
    }
  ],
  paths: {
    '/users': {
      post: CreateUser,
      get: GetAllUsers,
      put: UpdateById
    },
    '/users/{id}': {
      get: GetUserById,
      delete: DeleteById
    }
  }
}
