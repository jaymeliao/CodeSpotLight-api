exports.up = function(knex) {
    return knex.schema.createTable('likes', table => {
      table.increments('id');
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('likes');
  };
  
