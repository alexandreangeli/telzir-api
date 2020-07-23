exports.up = function (knex) {
  return knex.schema.raw(`
    CREATE TABLE "call_price"(
      id serial not null primary key,
      origin varchar(3) not null,
      destination varchar(3) not null,
      cents_per_minute int not null,
      CONSTRAINT call_price_unique UNIQUE (origin, destination)
    )
  `);
};

exports.down = function (knex) {
  return knex.schema.raw(`
    DROP TABLE "call_price"
  `);
};
