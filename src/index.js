const app = require("./app");
require('./app/database')

const config = require("./app/config.js");
app.listen(config.APP_PORT, () => {
  console.log(`${APP_PORT}`, "start");
});
