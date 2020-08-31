const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "root", "root", {
	dialect: "mysql",
	host: "localhost",
	port: 8889,
})

module.exports = sequalize;