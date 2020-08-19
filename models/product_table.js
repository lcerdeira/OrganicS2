module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
    title: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    unit: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false },
  });
  Product.associate = function(models) {
    //Product can be on many orders
    Product.belongsToMany(models.Order, { through: models.Order_product});
    //Product belongs to one category
    Product.belongsTo(models.Product_category, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Product;
};
