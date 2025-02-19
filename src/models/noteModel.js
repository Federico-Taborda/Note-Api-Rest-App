import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tag: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: []
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'low',
    validate: {
      isAlpha: true,
      isIn: [['low', 'medium', 'high']]
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  visibility: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'private',
    validate: {
      isAlpha: true,
      isIn: [['public', 'private']]
    }
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
},
{
  timestamps: true, // Enable createdAt y updatedAt
  tableName: 'notes' // Provides the table name in the database
}
)

export default Note
