
exports.up = async function(knex) {
    await knex.schema.createTable("sales", (table) => {
        table.increments("id").notNullable()
        table.integer("price").notNullable()
        table.integer("car_id").notNullable()
            .references("id")
            .inTable("cars")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("sales")
    await knex.schema.dropTableIfExists("cars")
};
