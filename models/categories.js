'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categories.hasMany(models.Courses,{foreignKey:"category_id",as:"courses"});
    }
  }
  Categories.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    category_name: DataTypes.STRING,
    category_desc: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};