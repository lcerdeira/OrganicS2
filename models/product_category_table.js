module.exports = function(sequelize, DataTypes) {
  const Product_category = sequelize.define("Product_category", {
    category: { type: DataTypes.STRING, allowNull: false }
  });
  Product_category.associate = function(models) {
    // Category has many products
    Product_category.hasMany(models.Product, {
      onDelete: "cascade"
    });
  };
  return Product_category;
};
