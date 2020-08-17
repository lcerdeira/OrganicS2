module.exports = function(sequelize, DataTypes) {
  const Order_product = sequelize.define("Order_product", {
    qty: { type: DataTypes.INTEGER, allowNull: false }
  });

  return Order_product;
};
