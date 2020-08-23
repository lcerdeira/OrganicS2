module.exports = function(sequelize, DataTypes) {
  const orderProduct = sequelize.define("orderProduct", {
    qty: { type: DataTypes.INTEGER, allowNull: false }
  });

  return orderProduct;
};
