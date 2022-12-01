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
   await queryInterface.bulkInsert('Categories',[
    {
    id: '1b671a64-40d5-491e-99b0-da01ff1f3341',
    category_name: "Community Development",
    category_desc: "ini adalah deskripsi Community Development",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id:'2b671a64-40d5-491e-99b0-da01ff1f3341',
    category_name: "Programming",
    category_desc: "ini adalah deskripsi Programming",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id:'3b671a64-40d5-491e-99b0-da01ff1f3341',
    category_name: "Social Enterprise",
    category_desc: "ini adalah deskripsi Social Enterprise",
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
    await queryInterface.bulkDelete('Categories',null,{});
  }
};
