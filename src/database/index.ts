const knex = require("knex");
const configuration = require("../../knexfile.js");

let config;
switch (process.env.NODE_ENV) {
  case "test":
    config = configuration.test;
    break;
  case "production":
    config = configuration.production;
    break;
  default:
    config = configuration.development;
    break;
}
console.log("RUNNING ON " + process.env.NODE_ENV + " " + process.env.PORT);
const connection = knex(config);

if (process.env.NODE_ENV !== "test")
  connection
    .raw("SELECT 'test connection'")
    .then(async () => await connection.migrate.latest());

export default connection;
