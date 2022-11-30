"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "sofa đệm",
          price: 123233,
          image:
            "https://i0.wp.com/topnoithat.com/wp-content/uploads/2021/08/ghe-sofa-goc-chu-k-kich-thuoc-lon-s145.jpg?resize=850%2C638&ssl=1",
          description: "san pham chat luong cao",
          status_number: true,
          category_id: 1,
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },
        {
          name: "ghế gaming",
          price: 20000,
          image:
            "https://salt.tikicdn.com/cache/w1200/ts/product/fa/fd/ab/a772f9a97b094fca53f1602cad543400.jpg",
          description: "san pham chat luong cao",
          status_number: true,
          category_id: 2,
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
