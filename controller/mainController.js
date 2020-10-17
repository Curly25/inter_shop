const Product = require("../models/product");
const Order = require("../models/order");

exports.getHomePage = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render("pages/home", {
        products: products,
        pageTitle: "All products",
        path: "pages/home",
      });
    })
    .catch(err => console.log(err));
};
exports.getContactPage = (req, res, next) => {
  res.render("pages/contact", {
    currentCart: req.currentCart,
    total: req.total,
  });
};
exports.getFaqPage = (req, res, next) => {
  res.render("pages/faq");
};
exports.getDeliveryPage = (req, res, next) => {
  res.render("pages/delivery");
};
exports.getSpecialOffersPage = (req, res, next) => {
  res.render("pages/specialoffers");
};
exports.getLoginPage = (req, res, next) => {
  res.render("pages/login");
};
exports.getCompairPage = (req, res, next) => {
  res.render("pages/compair");
};
exports.getRegisterPage = (req, res, next) => {
  res.render("pages/register");
};
exports.getComponentsPage = (req, res, next) => {
  res.render("pages/components");
};
exports.getForgetPassPage = (req, res, next) => {
  res.render("pages/forgetpass");
};
exports.getLegalNoticePage = (req, res, next) => {
  res.render("pages/legal_notice");
};
exports.getTacPage = (req, res, next) => {
  res.render("pages/tac");
};
exports.getProductsPage = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render("pages/products", {
        products: products,
        pageTitle: "All products",
        path: "pages/products",
        currentCart: req.currentCart,
        total: req.total,
      });
    })
    .catch(err => console.log(err));
};
exports.getProductSummaryPage = (req, res, next) => {
  res.render("pages/product_summary");
};
exports.getProductDetailsPage = (req, res, next) => {
  res.render("pages/product_details");
  const id = req.params.id;
  Product.findByPk(id)
    .then(product => {
      res.render("pages/product_details", {
        product: product,
        pageTitle: "Product details",
        currentCart: req.currentCart,
        total: req.total,
      });
    })
    .catch(err => console.log(err));
};
exports.getCartPage = (req, res, next) => {
  req.user
    .getCartPage()
    .then(cart => {
      return cart.getProductsPage().then(products => {
        res.render("pages/product_summary", {
          path: "/product_summary",
          products: products,
          currentCart: req.currentCart,
          total: req.total,
        });
      });
    })
    .catch(err => console.log(err));
};
exports.postCartPage = (req, res, next) => {
  const productId = req.body.productId;
  let newQuantity = 1;
  let currentCart;
  req.user
    .getCartPage()
    .then(cart => {
      currentCart = cart;
      return cart.getProductsPage({ where: { id: productId } });
    })
    .then(([product]) => {
      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(productId);
    })
    .then(product => {
      return currentCart.addProduct(product, {
        through: { quantity: newQuantity },
      });
    })
    .then(result => {
      res.redirect("/product_summary");
    })
    .catch(err => console.log(err));
};
exports.getOrdersPage = (req, res, next) => {
  req.user
    .getOrdersPage({ include: ["products"] })
    .then(orders => {
      let productsItem = [];
      orders.map(order => {
        return order.products.map(product => {
          if (productsItem.find(item => item.id === product.id)) {
            productsItem.find(item => {
              if (item.id === product.id) {
                return (item.orderItem.quantity += product.orderItem.quantity);
              }
            });
          } else {
            return productsItem.push(product);
          }
        });
      });
      res.render("pages/orders", {
        orders: orders,
        productsItem,
        path: "/order",
        currentCart: req.currentCart,
        total: req.total,
      });
    })
    .catch(err => console.log(err));
};
exports.postOrdersPage = (req, res, next) => {
  let currentCart;
  req.user
    .getCart()
    .then(cart => {
      currentCart = cart;
      return cart.getProductsPage();
    })
    .then(products => {
      return req.user.createOrder().then(order => {
        return order.addProduct(
          products.map(product => {
            product.orderItem = { quantity: product.cartItem.quantity };
            return product;
          })
        );
      });
    })
    .then(result => {
      return currentCart.setProducts(null);
    })
    .then(result => {
      res.redirect("/orders");
    })
    .catch(err => console.log(err));
};
