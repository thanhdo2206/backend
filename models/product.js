'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category}) {
      // mối quan hệ 1-N với Categoty
      this.belongsTo(Category, {foreignKey: "category_id"})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    status_number: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};