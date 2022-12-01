'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Modules', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      module_name: {
        type: Sequelize.STRING
      },
      module_text: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      module_file: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      course_id:{
        type: Sequelize.UUID,
        references: {
          model :{
            tableName: "Courses",
          },
          key: "id",
        },
        allowNull: true,
        onDelete : "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Modules');
  }
};