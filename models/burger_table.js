module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("burgers", {
    burger_name: { type: DataTypes.STRING, allowNull: false },
    devoured: { type: DataTypes.TINYINT, allowNull: false },
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
      field: 'updated_at',
    }
  });

  return Burger;
};
