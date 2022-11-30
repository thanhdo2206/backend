'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,CartItem}) {
      
      //quan hệ 1-1 với user 
      this.belongsTo(User, {foreignKey: "user_id"});

      //quan hệ 1-N với CartItem
      this.hasMany(CartItem, { foreignKey: "cart_id" });



    }
  }
  Cart.init({
    total_cart: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};