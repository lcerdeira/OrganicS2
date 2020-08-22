module.exports = function(sequelize, DataTypes) {
  const Payment = sequelize.define("Payment", {
    orderId: { type: DataTypes.INTEGER, allowNull: false },
    failed: { type: DataTypes.TINYINT, allowNull: false },
    tranId: { type: DataTypes.INTEGER, allowNull: false }
  });

  return Payment;
};
