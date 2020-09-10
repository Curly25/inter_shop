const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "root", "root", {
	dialect: "mysql",
	host: "localhost",
	port: 8000,
})

module.exports = sequalize;