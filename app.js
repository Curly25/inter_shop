const express = require("express"); // підключення express
const PORT = 8000; // підключення порта

const app = express();
const bodyParser = require("body-parser");
const path = require("path");


app.set("view engine", "ejs"); // підлючення шаблонізатора ejs
app.set("views", "views"); // вказуємо де працюватиме шаблонізатор
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static"))); // підключення static файлів (css js img...)

app.listen(PORT, () => console.log("server work")); // запуск сервера