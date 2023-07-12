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
    static associate(models) {
      Product.belongsToMany(models.Order, {
        through: models.OrderItem,
        foreignKey: 'productId',
      });

      Product.belongsToMany(models.User, {
        through: models.OrderItem,
        foreignKey: 'productId',
        otherKey: 'userId',
      });
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    summary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
