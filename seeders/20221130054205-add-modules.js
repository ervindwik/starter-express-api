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
     await queryInterface.bulkInsert('Modules',[
      {
        id:"acdaf5b5-291c-44d3-b6e2-2da194d7539c",
        module_name: "Pendahuluan",
        module_text: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error autem explicabo cupiditate sed commodi quis suscipit quas? "," Ratione iste iure aspernatur, officiis adipisci quo! Eos ut consectetur in quibusdam ."],
        module_file: ["http://res.cloudinary.com/dv9yhj2nq/image/upload/v1669787875/vfzcz8jvfq83uz0d9nb4.jpg"],
        course_id: "3a671a64-40d5-491e-99b0-da01ff1f3341",
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
      id:'bcdaf5b5-291c-44d3-b6e2-2da194d7539c',
      module_name: "Bab 1",
      module_text: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error autem explicabo cupiditate sed commodi quis suscipit quas?  ","  Ratione iste iure aspernatur, officiis adipisci quo! Eos ut consectetur in quibusdam ."],
      module_file: ["http://res.cloudinary.com/dv9yhj2nq/image/upload/v1669787875/vfzcz8jvfq83uz0d9nb4.jpg"],
      course_id: "3a671a64-40d5-491e-99b0-da01ff1f3341",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id:'ccdaf5b5-291c-44d3-b6e2-2da194d7539c',
      module_name: "Bab 2",
      module_text: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error autem explicabo cupiditate sed commodi quis suscipit quas?  ","  Ratione iste iure aspernatur, officiis adipisci quo! Eos ut consectetur in quibusdam ."],
      module_file: ["http://res.cloudinary.com/dv9yhj2nq/image/upload/v1669787875/vfzcz8jvfq83uz0d9nb4.jpg"],
      course_id: "3a671a64-40d5-491e-99b0-da01ff1f3341",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //----------------------------//
    {
      id:'dcdaf5b5-291c-44d3-b6e2-2da194d7539c',
      module_name: "Pendahuluan",
      module_text: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error autem explicabo cupiditate sed commodi quis suscipit quas?  ","  Ratione iste iure aspernatur, officiis adipisci quo! Eos ut consectetur in quibusdam ."],
      module_file: ["http://res.cloudinary.com/dv9yhj2nq/image/upload/v1669787875/vfzcz8jvfq83uz0d9nb4.jpg"],
      course_id: "4a671a64-40d5-491e-99b0-da01ff1f3341",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id:'ecdaf5b5-291c-44d3-b6e2-2da194d7539c',
      module_name: "Bab 1",
      module_text: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error autem explicabo cupiditate sed commodi quis suscipit quas?  ","  Ratione iste iure aspernatur, officiis adipisci quo! Eos ut consectetur in quibusdam ."],
      module_file: ["http://res.cloudinary.com/dv9yhj2nq/image/upload/v1669787875/vfzcz8jvfq83uz0d9nb4.jpg"],
      course_id: "4a671a64-40d5-491e-99b0-da01ff1f3341",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id:'fcdaf5b5-291c-44d3-b6e2-2da194d7539c',
      module_name: "Bab 2",
      module_text: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error autem explicabo cupiditate sed commodi quis suscipit quas?  ","  Ratione iste iure aspernatur, officiis adipisci quo! Eos ut consectetur in quibusdam ."],
      module_file: ["http://res.cloudinary.com/dv9yhj2nq/image/upload/v1669787875/vfzcz8jvfq83uz0d9nb4.jpg"],
      course_id: "4a671a64-40d5-491e-99b0-da01ff1f3341",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //----------------------------------------//
    {
      id:'1cdaf5b5-291c-44d3-b6e2-2da194d7539c',
      module_name: "Pendahuluan",
      module_text: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error autem explicabo cupiditate sed commodi quis suscipit quas?  ","  Ratione iste iure aspernatur, officiis adipisci quo! Eos ut consectetur in quibusdam ."],
      module_file: ["http://res.cloudinary.com/dv9yhj2nq/image/upload/v1669787875/vfzcz8jvfq83uz0d9nb4.jpg"],
      course_id: "5a671a64-40d5-491e-99b0-da01ff1f3341",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id:'2cdaf5b5-291c-44d3-b6e2-2da194d7539c',
      module_name: "Bab 1",
      module_text: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error autem explicabo cupiditate sed commodi quis suscipit quas?  ","  Ratione iste iure aspernatur, officiis adipisci quo! Eos ut consectetur in quibusdam ."],
      module_file: ["http://res.cloudinary.com/dv9yhj2nq/image/upload/v1669787875/vfzcz8jvfq83uz0d9nb4.jpg"],
      course_id: "5a671a64-40d5-491e-99b0-da01ff1f3341",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id:'3cdaf5b5-291c-44d3-b6e2-2da194d7539c',
      module_name: "Bab 2",
      module_text: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error autem explicabo cupiditate sed commodi quis suscipit quas?  ","  Ratione iste iure aspernatur, officiis adipisci quo! Eos ut consectetur in quibusdam ."],
      module_file: ["http://res.cloudinary.com/dv9yhj2nq/image/upload/v1669787875/vfzcz8jvfq83uz0d9nb4.jpg"],
      course_id: "5a671a64-40d5-491e-99b0-da01ff1f3341",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Modules',null,{});
  }
};
