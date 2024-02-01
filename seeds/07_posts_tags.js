/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// seeds/07_post_tags.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('post_tags').del();

  // Inserts seed entries
  await knex('post_tags').insert([
    { post_id: 1, tag_id: 1 },
    { post_id: 1, tag_id: 2 },
    { post_id: 2, tag_id: 3 },
    { post_id: 2, tag_id: 4 },
    { post_id: 3, tag_id: 5 },
    // More associations for other posts and tags
    { post_id: 4, tag_id: 1 },
    { post_id: 5, tag_id: 2 },
    { post_id: 6, tag_id: 3 },
    { post_id: 7, tag_id: 4 },
    { post_id: 8, tag_id: 5 },
    // Continue adding post-tag associations
  ]);
};
