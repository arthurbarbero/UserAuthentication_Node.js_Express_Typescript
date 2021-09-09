import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

class Connection {
  public sequelize: Sequelize

  public constructor () {
    this.database()
  }

  private database (): void {
    this.sequelize = new Sequelize(
      `${process.env.SEQUELIZE_DB_DIALECT}://${process.env.SEQUELIZE_DB_USER}:${process.env.SEQUELIZE_DB_PASS}@${process.env.SEQUELIZE_DB_HOST}:${process.env.SEQUELIZE_DB_PORT}/${process.env.SEQUELIZE_DB_DATABASE}`
    )
  }
}

export default Connection
