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
      "users",
      [
        {
          user_name: "Admin",
          email: "admin@gmail.com",
          password: "12345678",
          address:"48 Nguyen Luong Bang",
          phone_number: "0982837827",
          type: "admin",
          avatar:
            "https://petmaster.vn/petroom/wp-content/uploads/2020/03/thanh-bieu-cam-cho-husky.jpg",
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },
        {
          user_name: "Thanh Do",
          email: "dovanducthanh123@gmail.com",
          password: "12345678",
          address:"48 Doan Van Cu",
          phone_number: "0982837827",
          type: "client",
          avatar:
            "https://petmaster.vn/petroom/wp-content/uploads/2020/03/thanh-bieu-cam-cho-husky.jpg",
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },

        {
          user_name: "Tuan Bui",
          email: "tuanbui@gmail.com",
          password: "12345678",
          address:"48 Doan Van Cu",
          phone_number: "0982837827",
          type: "client",
          avatar:
            "https://petmaster.vn/petroom/wp-content/uploads/2020/03/thanh-bieu-cam-cho-husky.jpg",
          createdAt: "2022-09-06 08:25:19",
          updatedAt: "2022-09-06 08:25:19",
        },
        {
          user_name: "Thuong Hoai",
          email: "hoaithuongh@gmail.com",
          password: "12345678",
          address:"48 Doan Van Cu",
          phone_number: "0982837827",
          type: "client",
          avatar:
            "https://petmaster.vn/petroom/wp-content/uploads/2020/03/thanh-bieu-cam-cho-husky.jpg",
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

    await queryInterface.bulkDelete("users", null, {});
  },
};
