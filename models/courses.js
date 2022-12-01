'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Courses.belongsTo(models.Users,{foreignKey:"user_id",as:"users",onDelete: "CASCADE"});
      Courses.belongsTo(models.Categories,{foreignKey:"category_id",as:"categories",onDelete: "CASCADE"});
      Courses.hasMany(models.Modules,{foreignKey:"course_id",as:"modules"});
      Courses.hasMany(models.Transaction,{foreignKey:"course_id",as:"transactions"});
    }
  }
  Courses.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    course_name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    picture: DataTypes.STRING,
    video: DataTypes.STRING,
    course_viewer: DataTypes.STRING,
    course_status: DataTypes.BOOLEAN,
    token_transaction: DataTypes.STRING,
    review_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};