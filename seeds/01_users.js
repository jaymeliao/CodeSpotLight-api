const bcrypt = require('bcrypt');

// Define a salt rounds value
const saltRounds = 10; // You can adjust this value

exports.seed = async function(knex) {
  await knex('users').del();

  // Asynchronously hash the passwords
  const hashedPasswords = await Promise.all([
    bcrypt.hash('password1', saltRounds),
    bcrypt.hash('password2', saltRounds),
    bcrypt.hash('password3', saltRounds),
    bcrypt.hash('password4', saltRounds),
    bcrypt.hash('password5', saltRounds),
    bcrypt.hash('password6', saltRounds),
    bcrypt.hash('password7', saltRounds),
    bcrypt.hash('password8', saltRounds),
    bcrypt.hash('password9', saltRounds),
    bcrypt.hash('password10', saltRounds),
    bcrypt.hash('password11', saltRounds),
    bcrypt.hash('password12', saltRounds),
    bcrypt.hash('joan', saltRounds),

  ]);

  // Insert the users with the hashed passwords
  await knex('users').insert([
    {username: 'user1', email: 'user1@example.com', name: "User 1", password_hash: hashedPasswords[0], self_intro: "hello 1", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user2', email: 'user2@example.com', name: "User 2", password_hash: hashedPasswords[1], self_intro: "hello 2", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user3', email: 'user3@example.com', name: "User 3", password_hash: hashedPasswords[2], self_intro: "hello 3", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user4', email: 'user4@example.com', name: "User 4", password_hash: hashedPasswords[3], self_intro: "hello 4", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user5', email: 'user5@example.com', name: "User 5", password_hash: hashedPasswords[4], self_intro: "hello 5", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user6', email: 'user6@example.com', name: "User 6", password_hash: hashedPasswords[5], self_intro: "hello 6", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user7', email: 'user7@example.com', name: "User 7", password_hash: hashedPasswords[6], self_intro: "hello 7", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user8', email: 'user8@example.com', name: "User 8", password_hash: hashedPasswords[7], self_intro: "hello 8", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user9', email: 'user9@example.com', name: "User 9", password_hash: hashedPasswords[8], self_intro: "hello 9", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user10', email: 'user10@example.com', name: "User 10", password_hash: hashedPasswords[9], self_intro: "hello 10", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user11', email: 'user11@example.com', name: "User 11", password_hash: hashedPasswords[10], self_intro: "hello 11", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'user12', email: 'user12@example.com', name: "User 12", password_hash: hashedPasswords[11], self_intro: "hello 12", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    {username: 'joan', email: 'joanzz@example.com', name: "Joan Zao", password_hash: hashedPasswords[12], self_intro: " Hello! I'm Joan, a passionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
    
  ]);
};

// // seeds/01_users.js

// exports.seed = async function(knex) {
//   await knex('users').del();
//   await knex('users').insert([
//     {username: 'username1', email: 'email1@example.com', name:"name1",password_hash: 'testhash', profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
//     {username: 'test2', email: 'test2@example.com', name:"Louie",password_hash: 'testhash', profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
//     {username: 'user1', email: 'user3@example.com', password_hash: 'hash', self_intro:"hello 1",profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
//     {username: 'user2', email: 'user4@example.com', password_hash: 'hash', self_intro:"hello 2", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
//     {username: 'user3', email: 'user5@example.com', password_hash: 'hash', self_intro:"hello 3", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
//     {username: 'user4', email: 'user6@example.com', password_hash: 'hash', self_intro:"hello 4", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
//     {username: 'user5', email: 'user7@example.com', password_hash: 'hash', self_intro:"hello 50", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
//     {username: 'user6', email: 'user8@example.com', password_hash: 'hash', self_intro:"hello 6",profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
//     {username: 'user7', email: 'user9@example.com', password_hash: 'hash', self_intro:"hello 7", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'},
//     {username: 'user8', email: 'user10@example.com', password_hash: 'hash', self_intro:"hello 8", profile_picture_url: 'https://picsum.photos/seed/picsum/200/300'}
//   ]);
// };