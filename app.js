const express = require("express"); // підключення express
const bodyParser = require("body-parser");
const path = require("path");
const errorController = require("./controller/errorController"); 

const PORT = 8081; // підключення порта
const app = express();

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
		app.listen(PORT, () => console.log("server work"));
	})
	.catch((err) => console.log(err));