const Sequalize = require("sequelize");
const HOST = process.env.HOSTNAME;
const { DATABASENAME, PASSWORD, USERNAME, HOSTNAME } = require("./config");
const sequalize = new Sequalize(DATABASENAME, PASSWORD, USERNAME, {
	dialect: "mysql",
	//host: "10.7.101.193", // internal address 
	host: HOSTNAME, // from internet addres
});

module.exports = sequalize;

