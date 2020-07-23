require("dotenv").config();

module.exports = {
  development: {
    client: "postgres",
    connection: {
      host: process.env.CONNECTION_HOST,
      port: process.env.CONNECTION_PORT,
      user: process.env.CONNECTION_USER,
      password: process.env.CONNECTION_PASSWORD,
      database: process.env.CONNECTION_DATABASE,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    client: "pg",
    connection: {
      database: "db_test",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    useNullAsDefault: true,
  },
};
