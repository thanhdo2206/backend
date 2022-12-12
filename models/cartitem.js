"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
   
    static associate({ Product, Cart }) {
      // mối quan hệ 1-1 với Product
      this.belongsTo(Product, { foreignKey: "product_id" });

      //mối quan hệ 1-N với Cart
      this.belongsTo(Cart, { foreignKey: "cart_id" });
    }
  }
  CartItem.init(
    {
      quantity: DataTypes.INTEGER,
      payment_cartItem: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "CartItem",
    }
  );
  return CartItem;
};
