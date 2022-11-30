"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cartitems",
      [
        {
          product_id: 1,
          cart_id: 1,
          name_product: "sofa đệm",
          image_product:
            "https://i0.wp.com/topnoithat.com/wp-content/uploads/2021/08/ghe-sofa-goc-chu-k-kich-thuoc-lon-s145.jpg?resize=850%2C638&ssl=1",
          price_product: 12000,
          quantity: 2,
          payment_cartItem: price_product * quatity,
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },
        {
          product_id: 1,
          cart_id: 2,
          name_product: "sofa đệm",
          image_product:
            "https://i0.wp.com/topnoithat.com/wp-content/uploads/2021/08/ghe-sofa-goc-chu-k-kich-thuoc-lon-s145.jpg?resize=850%2C638&ssl=1",
          price_product: 12000,
          quantity: 3,
          payment_cartItem: price_product * quatity,
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },
        {
          product_id: 2,
          cart_id: 3,
          name_product: "ghế gaming",
          image_product:
            "https://salt.tikicdn.com/cache/w1200/ts/product/fa/fd/ab/a772f9a97b094fca53f1602cad543400.jpg",
          price_product: 20000,
          quantity: 2,
          payment_cartItem: price_product * quatity,
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
