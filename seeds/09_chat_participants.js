// seeds/09_chat_participants.js

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('chat_participants').del();
  
    // Inserts seed entries
    await knex('chat_participants').insert([
      { chat_id: 1, user_id: 1 },
      { chat_id: 1, user_id: 2 },
      { chat_id: 2, user_id: 3 },
      { chat_id: 2, user_id: 4 },
      // ... more participants
      { chat_id: 3, user_id: 5 },
      { chat_id: 3, user_id: 6 },
      { chat_id: 4, user_id: 7 },
      { chat_id: 5, user_id: 8 },
      { chat_id: 6, user_id: 9 },
      { chat_id: 7, user_id: 10 },
      // Continue as needed
    ]);
  };
  