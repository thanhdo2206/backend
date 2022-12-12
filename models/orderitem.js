"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Product, Order }) {
      //mối quan hệ 1-N với Order
      this.belongsTo(Order, { foreignKey: "order_id" });

      // mối quan hệ 1-1 với Product
      this.belongsTo(Product, { foreignKey: "product_id" });
    }
  }
  OrderItem.init(
    {
      quantity: DataTypes.INTEGER,
      payment_orderItem: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
