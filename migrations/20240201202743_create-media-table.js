exports.up = function(knex) {
    return knex.schema.createTable('media', table => {
      table.increments('id').primary();;
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE');
      table.string('media_url').notNullable();
      table.string('media_type').notNullable(); // 'image' or 'video'
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('media');
  };
  