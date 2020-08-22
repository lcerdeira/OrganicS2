module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define("Order", {
    hash: { type: DataTypes.STRING, allowNull: false },
    total: { type: DataTypes.FLOAT, allowNull: false },
    addressId: { type: DataTypes.INTEGER, allowNull: false },
    paid: { type: DataTypes.TINYINT, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
  });

  Order.associate = function(models) {
    Order.belongsToMany(models.Product, { through: models.orderProduct });
  };

  return Order;
};
