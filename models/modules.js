'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Modules.belongsTo(models.Courses,{foreignKey:"course_id", as: "courses",onDelete: "CASCADE"});
    }
  }
  Modules.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    module_name: DataTypes.STRING,
    module_text: DataTypes.ARRAY(DataTypes.STRING),
    module_file: DataTypes.ARRAY(DataTypes.STRING),
  }, {
    sequelize,
    modelName: 'Modules',
  });
  return Modules;
};