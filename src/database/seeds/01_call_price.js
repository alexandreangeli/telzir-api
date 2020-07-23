exports.seed = function (knex) {
  return knex.schema.raw(`
    delete from call_price;
  `).raw(`
    insert into call_price
      (origin, destination, cents_per_minute)
    values
      ('011', '016', 190),
      ('016', '011', 290),
      ('011', '017', 190),
      ('017', '011', 270),
      ('011', '018', 090),
      ('018', '011', 190);
  `);
};
