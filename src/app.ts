import express, { Application } from 'express'
import cors from 'cors'
import routes from './routes'
import dbInt from './Entities/migration'
import morgan from 'morgan'

class App {
  public instance: Application

  public constructor () {
    // Initiating a express App
    this.instance = express()

    // Setting up dependencies in a basic way
    this.middlewares()
    this.database()
    this.routes()
  }

  // Middlewares for express
  private middlewares (): void {
    this.instance.use(express.json())
    this.instance.use(cors())
    this.instance.use(morgan('dev'))
  }

  // Middleware for initiating database on sequelize
  private database (): void {
    dbInt()
  }

  // Controler's routes to reach application features
  private routes (): void {
    this.instance.use(routes)
  }
}

export default App
