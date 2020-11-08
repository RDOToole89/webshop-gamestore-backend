"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsToMany(models.order, {
        through: "orderDetails",
        foreignKey: "productId",
      });
      product.hasMany(models.productComment);
    }
  }
  product.init(
    {
      productName: DataTypes.STRING,
      description: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      supplierId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      unit: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
