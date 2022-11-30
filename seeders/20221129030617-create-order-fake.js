"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          user_id: 2,
          fullName: "Do Van Duc Thanh",
          receiving_address: "48 Doan Van Cu",
          phone_number: "092832038",
          status_order: 1,
          total_order: 24000,
          createdAt: "2022-09-01 08:25:19",
          updatedAt: "2022-09-05 08:25:19",
        },
        {
          user_id: 3,
          fullName: "Bui Anh Tuan",
          receiving_address: "48 Doan Van Cu",
          phone_number: "092832038",
          status_order: 1,
          total_order: 36000,
          createdAt: "2022-09-01 08:25:19",
          updatedAt: "2022-09-05 08:25:19",
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
