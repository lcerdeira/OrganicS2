module.exports = function(sequelize, DataTypes) {
  const ProductCategory = sequelize.define("ProductCategory", {
    category: { type: DataTypes.STRING, allowNull: false }
  });
  ProductCategory.associate = function(models) {
    // Category has many products
    ProductCategory.hasMany(models.Product, {
      onDelete: "cascade"
    });
  };
  return ProductCategory;
};
