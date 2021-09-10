import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

class AuthService {
  public createAuth (id: number): string {
    return jwt.sign({ id: id }, process.env.JWT_PASS, { expiresIn: 1200000 })
  }
}

export default new AuthService()
