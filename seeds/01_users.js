// seeds/01_users.js

exports.seed = async function(knex) {
  await knex('users').del();
  await knex('users').insert([
    {username: 'johnDoe', email: 'john@example.com', password_hash: 'johndoe1', profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'janeDoe', email: 'jane@example.com', password_hash: 'janedoe2', profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user1', email: 'user3@example.com', password_hash: 'hash', self_intro:"hello 1",profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user2', email: 'user4@example.com', password_hash: 'hash', self_intro:"hello 2", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user3', email: 'user5@example.com', password_hash: 'hash', self_intro:"hello 3", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user4', email: 'user6@example.com', password_hash: 'hash', self_intro:"hello 4", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user5', email: 'user7@example.com', password_hash: 'hash', self_intro:"hello 50", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user6', email: 'user8@example.com', password_hash: 'hash', self_intro:"hello 6",profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user7', email: 'user9@example.com', password_hash: 'hash', self_intro:"hello 7", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user8', email: 'user10@example.com', password_hash: 'hash', self_intro:"hello 8", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'}
  ]);
};

