// seeds/05_comments.js

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('comments').del();
  
    // Inserts seed entries
    await knex('comments').insert([
      { post_id: 1, user_id: 2, content: 'Great post!' },
      { post_id: 1, user_id: 3, content: 'Really enjoyed this!' },
      { post_id: 2, user_id: 1, content: 'Thanks for sharing!' },
      // More comments for post 1 and 2
      { post_id: 2, user_id: 4, content: 'Interesting perspective!' },
      { post_id: 3, user_id: 1, content: 'Nice photo!' },
      // Comments for other posts
      { post_id: 4, user_id: 2, content: 'Loved this!' },
      { post_id: 5, user_id: 3, content: 'Can’t wait to try this.' },
      { post_id: 6, user_id: 1, content: 'Amazing!' },
      { post_id: 7, user_id: 2, content: 'Very informative post.' },
      { post_id: 8, user_id: 3, content: 'This is awesome!' },
      // Continue adding comments
    ]);
  };
  