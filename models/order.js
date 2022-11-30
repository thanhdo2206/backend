'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,OrderItem}) {
        // 1-N user
      this.belongsTo(User, { foreignKey: "user_id" });

      //mối quan hệ 1-N với OrderItem
      this.hasMany(OrderItem, { foreignKey: "order_id" });      
    }
  }
  Order.init({
    receiving_address: DataTypes.STRING,
    fullName: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    status_order: DataTypes.INTEGER,
    total_order: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};