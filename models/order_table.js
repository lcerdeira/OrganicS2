module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define("Order", {
    hash: { type: DataTypes.STRING, allowNull: false },
    total: { type: DataTypes.FLOAT, allowNull: false },
    address_id: { type: DataTypes.INTEGER, allowNull: false },
    paid: { type: DataTypes.TINYINT, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
  });

  Order.associate = function(models) {
    Order.belongsToMany(models.Product, { through: models.Order_product});
  };

  return Order;
};
