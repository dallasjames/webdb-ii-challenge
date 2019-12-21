
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      table.text("make").notNull()
      table.text("model").notNull()
      table.text("VIN").notNull()
      table.integer("milage").notNull()
      table.text("transmission").notNull()
      table.text("title").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
