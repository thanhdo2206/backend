"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "categories",
      [
        {
          category_name:"Sofa",
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },
        {
          category_name:"Chair",
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('categories', null, {});
  },
};
