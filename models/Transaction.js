const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Transaction extends Model {}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'book',
        key: 'id',
      },
    },
    seller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    buyer_email: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'email',
      },
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'transaction',
  }
);

module.exports = Transaction;