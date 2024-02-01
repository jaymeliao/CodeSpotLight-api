exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
      table.increments('id').primary();
      table.text('content').notNullable();
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comments');
  };
  