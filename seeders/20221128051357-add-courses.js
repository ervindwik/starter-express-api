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
     await queryInterface.bulkInsert('Courses',[
      {
      id: '3a671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Community Development Part 1",
      description: "ini adalah deskripsi Course Belajar Community Development Part 1",
      price: "150000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668761985/tenkspvah9zuwasohgal.jpg",
      category_id : "1b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "2b671a62-40d5-491e-99b0-da01ff1f3342",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
      id: '4a671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Community Development Part 2",
      description: "ini adalah deskripsi Course Belajar Community Development Part 2",
      price: "250000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668761985/tenkspvah9zuwasohgal.jpg",
      category_id : "1b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "2b671a62-40d5-491e-99b0-da01ff1f3342",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
      id: '5a671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Community Development Part 3",
      description: "ini adalah deskripsi Course Belajar Community Development Part 3",
      price: "150000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668761985/tenkspvah9zuwasohgal.jpg",
      category_id : "1b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "2b671a62-40d5-491e-99b0-da01ff1f3342",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
      id: '6a671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Community Development Exclusive",
      description: "ini adalah deskripsi Course Belajar Community Development Exclusive",
      price: "350000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668761985/tenkspvah9zuwasohgal.jpg",
      category_id : "1b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "2b671a62-40d5-491e-99b0-da01ff1f3342",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
      id: '7a671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Community Development Final",
      description: "ini adalah deskripsi Course Belajar Community Development Final",
      price: "450000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668761985/tenkspvah9zuwasohgal.jpg",
      category_id : "1b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "2b671a62-40d5-491e-99b0-da01ff1f3342",
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    //-----------------------//
    {
      id:'8a671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Web Programming Part 1",
      description: "ini adalah deskripsi Course Belajar Web Programming Part 1",
      price: "150000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668762165/qknvwnbaczi1fzxp3s3w.jpg",
      category_id : "2b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "3b671a63-40d5-491e-99b0-da01ff1f3343",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'9a671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Web Programming Part 2",
      description: "ini adalah deskripsi Course Belajar Web Programming Part 2",
      price: "250000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668762165/qknvwnbaczi1fzxp3s3w.jpg",
      category_id : "2b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "3b671a63-40d5-491e-99b0-da01ff1f3343",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'0a671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Web Programming Part 3",
      description: "ini adalah deskripsi Course Belajar Web Programming Part 3",
      price: "300000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668762165/qknvwnbaczi1fzxp3s3w.jpg",
      category_id : "2b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "3b671a63-40d5-491e-99b0-da01ff1f3343",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'9b671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Web Programming Exclusive",
      description: "ini adalah deskripsi Course Belajar Web Programming Exclusive",
      price: "400000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668762165/qknvwnbaczi1fzxp3s3w.jpg",
      category_id : "2b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "3b671a63-40d5-491e-99b0-da01ff1f3343",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'8b671a64-40d5-491e-99b0-da01ff1f3341',
      course_name: "Belajar Web Programming Final",
      description: "ini adalah deskripsi Course Belajar Web Programming Final",
      price: "400000",
      picture : "http://res.cloudinary.com/dv9yhj2nq/image/upload/v1668762165/qknvwnbaczi1fzxp3s3w.jpg",
      category_id : "2b671a64-40d5-491e-99b0-da01ff1f3341",
      user_id : "3b671a63-40d5-491e-99b0-da01ff1f3343",
      createdAt: new Date(),
      updatedAt: new Date(),
    },],{});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Courses',null,{});
  }
};
