/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// seeds/08_chats.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('chats').del();

  // Inserts seed entries
  await knex('chats').insert([
    
    { id: 1 }, // ID is typically auto-incremented, but included here for clarity
    { id: 2 },
    { id: 3 },
    // ... more chat sessions
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 }
    // Continue as needed
  ]);
};
