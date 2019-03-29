const configDetail = require('../../config')
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : configDetail.db.host || "localhost",
    user     : configDetail.db.user || "root",
    password : configDetail.db.password || "",
    database : configDetail.db.database || "lotteod",
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);
module.exports = bookshelf