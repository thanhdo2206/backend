"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ FeedBack, Cart, Order }) {
      // define association here
      this.hasMany(FeedBack, { foreignKey: "user_id" });

      //quan hệ 1-1 với cart
      this.hasOne(Cart, { foreignKey: "user_id",as:"user" });

      //mối quan hệ 1-N với Order
      this.hasMany(Order, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      user_name: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      avatar: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
