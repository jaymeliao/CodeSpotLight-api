exports.up = function(knex) {
    return knex.schema
      .createTable('tags', table => {
        table.increments('id');
        table.string('name').notNullable().unique();
      })
      .createTable('post_tags', table => {
        table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE');
        table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE');
        table.primary(['post_id', 'tag_id']);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('post_tags')
      .dropTableIfExists('tags');
  };
  