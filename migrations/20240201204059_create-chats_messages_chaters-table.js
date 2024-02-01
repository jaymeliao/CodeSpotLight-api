exports.up = function(knex) {
    return knex.schema
      .createTable('chats', table => {
        table.increments('id');
        table.timestamps(true, true);
      })
      .createTable('chat_participants', table => {
        table.increments('id');
        table.integer('chat_id').unsigned().references('id').inTable('chats').onDelete('CASCADE');
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      })
      .createTable('messages', table => {
        table.increments('id');
        table.text('content').notNullable();
        table.integer('chat_id').unsigned().references('id').inTable('chats').onDelete('CASCADE');
        table.integer('sender_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('messages')
      .dropTableIfExists('chat_participants')
      .dropTableIfExists('chats');
  };
  