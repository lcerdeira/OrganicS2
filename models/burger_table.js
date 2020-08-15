module.exports = function(sequelize, DataTypes) {
  console.log("got executed");
  const Burger = sequelize.define("Burger", {
    // The email cannot be null, and must be a proper email before creation
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return Burger;
};
