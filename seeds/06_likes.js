// seeds/06_likes.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('likes').del();

  // Inserts seed entries
  await knex('likes').insert([
    { post_id: 1, user_id: 2 },
    { post_id: 1, user_id: 3 },
    { post_id: 2, user_id: 1 },
    // More likes for posts 1 and 2
    { post_id: 2, user_id: 4 },
    { post_id: 3, user_id: 1 },
    // Likes for other posts
    { post_id: 4, user_id: 2 },
    { post_id: 5, user_id: 3 },
    { post_id: 6, user_id: 1 },
    { post_id: 7, user_id: 2 },
    { post_id: 8, user_id: 3 },
    // Continue adding likes
  ]);
};
