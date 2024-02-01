// seeds/04_media.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('media').del();

  // Inserts seed entries
  await knex('media').insert([
    { post_id: 1, media_url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(11).webp', media_type: 'image' },
    { post_id: 1, media_url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp', media_type: 'image' },
    { post_id: 2, media_url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(13).webp', media_type: 'image' },
    { post_id: 3, media_url: 'https://www.w3schools.com/html/mov_bbb.mp4', media_type: 'video' },
    // Add more media items for posts 1, 2, 3, etc.
    { post_id: 4, media_url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(14).webp', media_type: 'image' },
    { post_id: 5, media_url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(15).webp', media_type: 'image' },
    { post_id: 6, media_url: 'https://www.w3schools.com/html/mov_bbb.mp4', media_type: 'video' },
    { post_id: 7, media_url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(16).webp', media_type: 'image' },
    { post_id: 8, media_url: 'https://www.w3schools.com/html/mov_bbb.mp4', media_type: 'video' },
    { post_id: 9, media_url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp', media_type: 'image' },
    // Continue for other posts
  ]);
};
