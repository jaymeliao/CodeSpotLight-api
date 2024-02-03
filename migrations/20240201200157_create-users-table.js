exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();;
    table.string("username").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("password_hash").notNullable();
    table.string("name");
    table.string("self_intro");
    table.string("profile_picture_url");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};

// but actually, i dont have to add primary() beyond using increments(), cuz knex auto set primary key when i using increment()