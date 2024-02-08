// seeds/04_media.js
/* sql
SELECT JSON_ARRAYAGG(
    JSON_OBJECT(
        'post_id', media.post_id,
        'media_url', media.media_url,
        'media_type', media.media_type
    )
) AS media_array
FROM media;

*/

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("media").del();

  // Inserts seed entries
  await knex("media").insert([
    { post_id: 1, media_url: "m1.png", media_type: "image" },
    { post_id: 1, media_url: "m2.png", media_type: "image" },
    { post_id: 2, media_url: "m3.webp", media_type: "image" },
    { post_id: 3, media_url: "v1.mp4", media_type: "video" },
    { post_id: 4, media_url: "m4.webp", media_type: "image" },
    { post_id: 5, media_url: "m7.jpeg", media_type: "image" },
    { post_id: 6, media_url: "v2.mp4", media_type: "video" },
    { post_id: 7, media_url: "m8.jpeg", media_type: "image" },
    { post_id: 8, media_url: "m5.webp", media_type: "image" },
    { post_id: 9, media_url: "m6.jpeg", media_type: "image" },
  ]);
};
