'use strict';
const SALT_ROUND = 10;
const bcrypt = require("bcrypt");

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
     await queryInterface.bulkInsert('Users',[
      {
      id: '1b671a61-40d5-491e-99b0-da01ff1f3344',
      username: "admin",
      name:"Admin",
      email:"admin@gmail.com",
      role_name:"admin",
      password: await bcrypt.hash("password", SALT_ROUND),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'2b671a62-40d5-491e-99b0-da01ff1f3342',
      username: "mirzanab",
      name:"Mirzan Abdullah",
      email:"mirzan@gmail.com",
      role_name:"pengajar",
      password: await bcrypt.hash("password", SALT_ROUND),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'3b671a63-40d5-491e-99b0-da01ff1f3343',
      username: "ervindwk",
      name:"Ervin Dwi Kurniawan",
      email:"ervin@gmail.com",
      role_name:"pengajar",
      password: await bcrypt.hash("password", SALT_ROUND),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'4b671a65-40d5-491e-99b0-da01ff1f3344',
      username: "bharasaja",
      name:"Bhara Arvin",
      email:"bhara@gmail.com",
      role_name:"peserta",
      password: await bcrypt.hash("password", SALT_ROUND),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'5b671a66-40d5-491e-99b0-da01ff1f3345',
      username: "rifki",
      name:"Rifki",
      email:"rifki@gmail.com",
      role_name:"peserta",
      password: await bcrypt.hash("password", SALT_ROUND),
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
     await queryInterface.bulkDelete('Users',null,{});
  }
};
