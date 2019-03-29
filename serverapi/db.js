const mysql = require('mysql');
const configDetail = require('../config')
const db = mysql.createConnection({
  host: configDetail.db.host || "localhost",
  user: configDetail.db.user || "root",
  password: configDetail.db.password || "",
  database: configDetail.db.database || "lotteod"
});

module.exports = db