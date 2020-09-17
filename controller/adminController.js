const Product = require("../models/product");
exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        products: products,
        pageTitle: "All products",
      });
    })
    .catch((err) => console.log(err));
}