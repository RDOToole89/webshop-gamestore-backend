"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productComment.belongsTo(models.user);
      productComment.belongsTo(models.product);
    }
  }
  productComment.init(
    {
      productId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "productComment",
    }
  );
  return productComment;
};
