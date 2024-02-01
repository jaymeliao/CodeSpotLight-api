

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('messages').del();
  
    // Inserts seed entries
    await knex('messages').insert([
      { chat_id: 1, sender_id: 1, content: 'Hello! How are you?' },
      { chat_id: 1, sender_id: 2, content: 'I\'m good, thanks! And you?' },
      { chat_id: 2, sender_id: 3, content: 'Did you see that movie last night?' },
      { chat_id: 2, sender_id: 4, content: 'Yes, it was great!' },
      { chat_id: 3, sender_id: 5, content: 'We should meet up this weekend.' },
      { chat_id: 3, sender_id: 6, content: 'Sure, sounds like a plan.' },
      // More messages for other chats
      { chat_id: 4, sender_id: 1, content: 'Are we still on for the meeting?' },
      { chat_id: 4, sender_id: 2, content: 'Yes, see you there!' },
      { chat_id: 5, sender_id: 3, content: 'Can you send me the report?' },
      { chat_id: 5, sender_id: 4, content: 'Sending it over now.' },
      // Continue adding messages
    ]);
  };
  