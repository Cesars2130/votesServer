require("dotenv").config()
const mysql = require('mysql2/promise');

const config ={
    user: "root",
    password: "Dajagohe3007",
    database: "VotesGameDB"
}

const createConnection = async () => { return await mysql.createConnection(config)};

module.exports = {createConnection}