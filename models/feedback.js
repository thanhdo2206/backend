'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeedBack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Product}) {
      // define association here
      this.belongsTo(User, {foreignKey: "user_id"})
      this.belongsTo(Product, {foreignKey: "product_id"})
    }
  }
  FeedBack.init({
    comment_text: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FeedBack',
  });
  return FeedBack;
};