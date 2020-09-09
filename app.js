const express = require("express"); // підключення express
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 8000; // підключення порта
const app = express();

// include Sequalize база 
const sequalize = require("./helper/database");

//routes middleware 
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs"); // підлючення шаблонізатора ejs
app.set("views", "views"); // вказуємо де працюватиме шаблонізатор
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "static"))); // підключення static файлів (css js img...)
app.use(mainRoutes);

app.listen(PORT, () => console.log("server work"));

// sequalize
// 	.sync()
// 	.then((connectionRezult) => {
// 		app.listen(PORT, () => console.log("server work"));
// 	})
// 	.catch((err) => console.log(err));