import UserModel from './Models/User'
const isDev = process.env.NODE_ENV === 'development'

const dbInt = (): void => {
  UserModel.sync({ alter: isDev })
}

export default dbInt
