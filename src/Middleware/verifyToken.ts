import { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import BaseResponse from '../Controllers/BaseResponse'
import LocalService from '../i18n/i18n.config'
import jwt from 'jsonwebtoken'
dotenv.config()

const validateToken = (req: Request, res: Response, next: NextFunction): unknown => {
  try {
    const token = req.header('Authorization')
    if (!token) {
      return res.status(401).json(
        new BaseResponse(
          true,
          LocalService.translate('Unauthorized')
        )
      )
    }

    jwt.verify(token.split('Bearer ')[1], process.env.JWT_PASS)
    next()
  } catch (error) {
    return res.status(401).json(
      new BaseResponse(
        true,
        LocalService.translate('InvalidToken')
      )
    )
  }
}

export default validateToken
