'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product,Cart}) {
      // mối quan hệ 1-1 với Product
      this.belongsTo(Product, {foreignKey: "product_id"});

      //mối quan hệ 1-N với Cart 
      this.belongsTo(Cart, {foreignKey: "cart_id"});


    }
  }
  CartItem.init({
    price_product: DataTypes.FLOAT,
    payment_cartItem: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    name_product:DataTypes.STRING,
    image_product:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};