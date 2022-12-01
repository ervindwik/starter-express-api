'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Transactions',[
      {
      id: '1c671a64-40d5-491e-99b0-da01ff1f3341',
      user_id: "4b671a65-40d5-491e-99b0-da01ff1f3344",
      course_id: "3a671a64-40d5-491e-99b0-da01ff1f3341",
      is_success : true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'2c671a64-40d5-491e-99b0-da01ff1f3341',
      user_id: "4b671a65-40d5-491e-99b0-da01ff1f3344",
      course_id: "4a671a64-40d5-491e-99b0-da01ff1f3341",
      is_success : true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'3c671a64-40d5-491e-99b0-da01ff1f3341',
      user_id: "4b671a65-40d5-491e-99b0-da01ff1f3344",
      course_id: "5a671a64-40d5-491e-99b0-da01ff1f3341",
      is_success : false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'4c671a64-40d5-491e-99b0-da01ff1f3341',
      user_id: "5b671a66-40d5-491e-99b0-da01ff1f3345",
      course_id: "8a671a64-40d5-491e-99b0-da01ff1f3341",
      is_success : true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'5c671a64-40d5-491e-99b0-da01ff1f3341',
      user_id: "5b671a66-40d5-491e-99b0-da01ff1f3345",
      course_id: "9a671a64-40d5-491e-99b0-da01ff1f3341",
      is_success : false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Transactions',null,{});
  }
};
