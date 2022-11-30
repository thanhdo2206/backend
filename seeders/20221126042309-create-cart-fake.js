"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "carts",
      [
        {
          user_id: 2,
          total_cart:24000 ,
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },
        {
          user_id: 3,
          total_cart: 36000,
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },  {
          user_id: 4,
          total_cart: 40000,
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
  },
};
