const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//const errorController = require("./controller/errorController");

const PORT = 8000;
const app = express();

// Include Sequalize
const sequalize = require("./helper/database");
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
app.use(mainRoutes);

sequalize
		.sync()	
		.then((connectionRezult) => {		
		app.listen(PORT, () => console.log("server work"));			
	})		
	.catch((err) => console.log(err)); 		