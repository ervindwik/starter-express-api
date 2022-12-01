'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model :{
            tableName: "Users",
          },
          key: "id",
        },
        allowNull: true,
        onDelete : "CASCADE"
      },
      course_id: {
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
      price: {
        type: Sequelize.INTEGER
      },
      is_success: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Transactions');
  }
};