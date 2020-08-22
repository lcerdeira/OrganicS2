module.exports = function(sequelize, DataTypes) {
  const Address = sequelize.define("Address", {


    user_id: {type:  DataTypes.INTEGER, allowNull: false},
    address_type: {type:  DataTypes.STRING, allowNull: false},
    street_address: {type:  DataTypes.STRING, allowNull: false},
    city: {type:  DataTypes.STRING, allowNull: false},
    postal_code: {type:  DataTypes.INTEGER, allowNull: false},
    country: {type:  DataTypes.INTEGER, allowNull: false}
    



  });

  return Address;
};