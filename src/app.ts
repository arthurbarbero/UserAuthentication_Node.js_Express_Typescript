import express from 'express'
import cors from 'cors'
import routes from './routes'
import dbInt from './Entities/migration'

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
  }

  private database (): void {
    dbInt()
  }

  private routes (): void {
    this.instance.use(routes)
  }
}

export default App
