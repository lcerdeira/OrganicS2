module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define("Order", {
    hash: { type: DataTypes.STRING, allowNull: true },
    total: { type: DataTypes.FLOAT, allowNull: false },
    addressId: { type: DataTypes.STRING, allowNull: false },
    paid: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    userId: { type: DataTypes.INTEGER, allowNull: true }
  });

  Order.associate = function(models) {
    Order.belongsToMany(models.Product, { through: models.orderProduct });
  };

  return Order;
};
