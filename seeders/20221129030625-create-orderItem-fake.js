"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orderitems",
      [
        {
          product_id: 1,
          order_id: 1,
          name_product: "sofa đệm",
          image_product:
            "https://i0.wp.com/topnoithat.com/wp-content/uploads/2021/08/ghe-sofa-goc-chu-k-kich-thuoc-lon-s145.jpg?resize=850%2C638&ssl=1",
          price_product: 12000,
          quantity: 2,
          payment_orderItem: price_product * quatity,
          createdAt: "2022-09-01 08:25:19",
          updatedAt: "2022-09-01 08:25:19",
        },
        {
          product_id: 1,
          order_id: 2,
          name_product: "sofa đệm",
          image_product:
            "https://i0.wp.com/topnoithat.com/wp-content/uploads/2021/08/ghe-sofa-goc-chu-k-kich-thuoc-lon-s145.jpg?resize=850%2C638&ssl=1",
          price_product: 12000,
          quantity: 3,
          payment_orderItem: price_product * quatity,
          createdAt: "2022-09-01 08:25:19",
          updatedAt: "2022-09-01 08:25:19",
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
