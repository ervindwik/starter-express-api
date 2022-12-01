'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      course_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      course_viewer: {
        type: Sequelize.STRING
      },
      course_status: {
        type: Sequelize.BOOLEAN
      },
      category_id: {
        type: Sequelize.UUID,
        references: {
          model :{
            tableName:"Categories",
          },
          key: "id",
        },
        allowNull: false,
        onDelete : "CASCADE",
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model :{
            tableName: "Users",
          },
          key: "id",
        },
        allowNull: false,
        onDelete : "CASCADE"
      },
      token_transaction: {
        type: Sequelize.STRING
      },
      review_id: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Courses');
  }
};