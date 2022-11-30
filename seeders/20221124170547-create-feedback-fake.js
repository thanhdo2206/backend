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
      "feedbacks",
      [
        {
          user_id: 1,
          product_id: 1,
          comment_text: "sản phẩm này cũng tạm",
          rating: 3,
        },
        {
          user_id: 1,
          product_id: 2,
          comment_text: "sản phẩm này rất tốt",
          rating: 5,
        },
        {
          user_id: 4,
          product_id: 1,
          comment_text: "sản phẩm dùng rất oke",
          rating: 5,
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
