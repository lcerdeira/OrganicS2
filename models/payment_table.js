module.exports = function(sequelize, DataTypes) {
  const Payment = sequelize.define("Payment", {
    order_id: { type: DataTypes.INTEGER, allowNull: false },
    failed: { type: DataTypes.TINYINT, allowNull: false },
    tran_id: { type: DataTypes.INTEGER, allowNull: false },
  });

  return Payment;
};
