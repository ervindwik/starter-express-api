'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Transaction.belongsTo(models.Users,{foreignKey:"user_id",as:"users",onDelete: "CASCADE"});
    Transaction.belongsTo(models.Transaction,{foreignKey:"course_id",as:"transactions",onDelete: "CASCADE"});
    }
  }
  Transaction.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    price: DataTypes.INTEGER,
    is_success: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};