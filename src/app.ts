import express from 'express'
import cors from 'cors'
import routes from './routes'
import dbInt from './Entities/migration'
import morgan from 'morgan'

class App {
  public instance: express.Application

  public constructor () {
    this.instance = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.instance.use(express.json())
    this.instance.use(cors())
    this.instance.use(morgan('dev'))
  }

  private database (): void {
    dbInt()
  }

  private routes (): void {
    this.instance.use(routes)
  }
}

export default App
