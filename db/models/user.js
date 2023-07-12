const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associate User with Order model
      User.hasMany(models.Order, {
        foreignKey: 'userId',
      });

      // Associate User with Product model through the junction table
      User.belongsToMany(models.Product, {
        through: models.OrderItem,
        foreignKey: 'userId',
        otherKey: 'productId',
      });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    street: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    city: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
