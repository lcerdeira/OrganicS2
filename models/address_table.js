module.exports = function(sequelize, DataTypes) {
  const Address = sequelize.define("Address", {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    addressType: { type: DataTypes.STRING, allowNull: false },
    streetAddress: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    postalCode: { type: DataTypes.INTEGER, allowNull: false },
    country: { type: DataTypes.INTEGER, allowNull: false }
  });

  return Address;
};
