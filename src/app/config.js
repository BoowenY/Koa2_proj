const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  APP_PORT,
  MYSQL_PORT,
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;
