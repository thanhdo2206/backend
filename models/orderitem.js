"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Order }) {
      //mối quan hệ 1-N với Order
      this.belongsTo(Order, { foreignKey: "order_id" });

      // mối quan hệ 1-1 với Product
      this.belongsTo(Product, { foreignKey: "product_id" });
    }
  }
  OrderItem.init(
    {
      image_product: DataTypes.STRING,
      name_product: DataTypes.STRING,
      price_product: DataTypes.FLOAT,
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
