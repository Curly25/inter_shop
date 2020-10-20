const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 8000;
const app = express();

// include sequalize
const sequalize = require("./helper/database");

const User = require("./models/users");
const Product = require("./models/product");
const Cart = require("./models/cart");
const CartItem = require("./models/cartItem");
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');

// seed
const seedProducts = require('./seedProducts');

// middleware
const mainRoutes = require("./routes/mainRoutes");
const adminRoutes = require('./routes/adminRoutes');
const errorController = require('./controller/errorController');

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
app.use(['/admin/products_edit/', '/product_details/:id', '/admin/'], express.static(path.join(__dirname, 'static')));

app.use((req, res, next) => {
<<<<<<< HEAD
  User.findByPk(2)
=======
  User.findByPk(1)
>>>>>>> e21f5c499ebabe6c6449ded8fa43a878659c458e
    .then((user) => {
      req.user = user;
    }).then(result => {
      req.user.getCart().then(cart => {
        return cart.getProducts();
      }).then(products => {
        req.currentCart = products;
        req.total = 0;
        if (products.length > 0) {
          req.total = products.map(product => {
            let counter = 0;
            counter += product.price * product.cartItem.quantity;
            return counter;
          });
          req.total = req.total.reduce((total, counter) => total + counter, 0);
        }

        next();
      });
    })
    .catch((err) => console.log(err));
});

app.use(mainRoutes);
app.use(adminRoutes);
app.use(errorController.get404);

// Relations
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequalize
  .sync()
  .then(connectionRezult => {
<<<<<<< HEAD
    Product.findByPk(2).then(product => {
=======
    Product.findByPk(1).then(product => {
>>>>>>> e21f5c499ebabe6c6449ded8fa43a878659c458e
      if (!product) {
        seedProducts.createProducts();
      }
      return product;
    }).catch(err => console.log(err));
<<<<<<< HEAD
    User.findByPk(2).then(user => {
=======
    User.findByPk(1).then(user => {
>>>>>>> e21f5c499ebabe6c6449ded8fa43a878659c458e
      if (!user) {
        return User.create({
          name: 'vika',
          email: 'vika@example.com',
          password: '123456'
        });
      }
      return user;
    }).then((user) => {
      return user.createCart();
    });
  })
  .then((result) => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
