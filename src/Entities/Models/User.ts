import { DataTypes, Model } from 'sequelize'
import { UserAttributes, UserInput } from '../Interfaces/UserAttributes'
import Connection from '../connection'

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number
  public name!: string
  public email!: string
  public password!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  sequelize: new Connection().sequelize,
  paranoid: true
})

export default User
