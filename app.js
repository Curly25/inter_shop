const express = require("express"); // підключення express
const bodyParser = require("body-parser");
const path = require("path");
const errorController = require("./controller/errorController"); 

const PORT = 8081; // підключення порта
const app = express();

// Include Models 
const Product = require("./models/product");
const User = require("./models/users");
const Cart = require("./models/cart");
const CarItem = require("./models/cartItem");
// include Sequalize база 
const sequalize = require("./helper/database");
//routes middleware 
const adminRoutes = require("./routes/adminRoutes");
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs"); // підлючення шаблонізатора ejs
app.set("views", "views"); // вказуємо де працюватиме шаблонізатор
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "static"))); // підключення static файлів (css js img...)
app.use("/admin", express.static(__dirname + "/static")); 

app.use(adminRoutes);
app.use(mainRoutes);
app.use(errorController.get404);

// app.listen(PORT, () => console.log("server work"));

sequalize
  .sync()
  .then((connectionRezult) => {
    return User.findByPk(1);
  })
  .then((user) => {
    console.log("user => ", user);
    if (!user) {
      return User.create({
        name: "vika",
        email: "vika@example.com",
        password: "vikapass",
      });
    }
    return user;
  })
  .then((user) => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));