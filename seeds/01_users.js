const bcrypt = require("bcrypt");

// Define a salt rounds value
const saltRounds = 10; // You can adjust this value

exports.seed = async function (knex) {
  await knex("users").del();

  // Asynchronously hash the passwords
  const hashedPasswords = await Promise.all([
    bcrypt.hash("password", saltRounds),
    bcrypt.hash("joan", saltRounds),
  ]);
  await knex("users").insert([
    {
      id: 1,
      username: "user1",
      email: "user1@example.com",
      password_hash: hashedPasswords[0],
      name: "User 1",
      self_intro: "hello 1",
      profile_picture_url: "pp1.jpeg",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@example.com",
      password_hash: hashedPasswords[0],
      name: "User 2",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp2.jpeg",
    },
    {
      id: 3,
      username: "user3",
      email: "user3@example.com",
      password_hash: hashedPasswords[0],
      name: "User 3",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp3.jpeg",
    },
    {
      id: 4,
      username: "user4",
      email: "user4@example.com",
      password_hash: hashedPasswords[0],
      name: "User 4",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp4.jpeg",
    },
    {
      id: 5,
      username: "user5",
      email: "user5@example.com",
      password_hash: hashedPasswords[0],
      name: "User 5",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp5.jpeg",
    },
    {
      id: 6,
      username: "user6",
      email: "user6@example.com",
      password_hash: hashedPasswords[0],
      name: "User 6",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp6.jpeg",
    },
    {
      id: 7,
      username: "user7",
      email: "user7@example.com",
      password_hash: hashedPasswords[0],
      name: "User 7",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp7.jpeg",
    },
    {
      id: 8,
      username: "user8",
      email: "user8@example.com",
      password_hash: hashedPasswords[0],
      name: "User 8",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp8.jpeg",
    },
    {
      id: 9,
      username: "user9",
      email: "user9@example.com",
      password_hash: hashedPasswords[0],
      name: "User 9",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp9.jpeg",
    },
    {
      id: 10,
      username: "user10",
      email: "user10@example.com",
      password_hash: hashedPasswords[0],
      name: "User 10",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp10.jpeg",
    },
    {
      id: 11,
      username: "user11",
      email: "user11@example.com",
      password_hash: hashedPasswords[0],
      name: "User 11",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp11.jpeg",
    },
    {
      id: 12,
      username: "user12",
      email: "user12@example.com",
      password_hash: hashedPasswords[0],
      name: "User 12",
      self_intro:
        " Hello! I a mpassionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp12.jpeg",
    },
    {
      id: 13,
      username: "joan",
      email: "joanzz@example.com",
      password_hash: hashedPasswords[1],
      name: "Joan Zao",
      self_intro:
        " Hello! I'm Joan, a passionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
      profile_picture_url: "pp13.jpeg",
    },
  ]);
  // Insert the users with the hashed passwords
  // await knex("users").insert([
  //   {
  //     username: "user1",
  //     email: "user1@example.com",
  //     name: "User 1",
  //     password_hash: hashedPasswords[0],
  //     self_intro: "hello 1",
  //   },
  //   {
  //     username: "user2",
  //     email: "user2@example.com",
  //     name: "User 2",
  //     password_hash: hashedPasswords[1],
  //     self_intro: "hello 2",
  //   },
  //   {
  //     username: "user3",
  //     email: "user3@example.com",
  //     name: "User 3",
  //     password_hash: hashedPasswords[2],
  //     self_intro: "hello 3",
  //   },
  //   {
  //     username: "user4",
  //     email: "user4@example.com",
  //     name: "User 4",
  //     password_hash: hashedPasswords[3],
  //     self_intro: "hello 4",
  //   },
  //   {
  //     username: "user5",
  //     email: "user5@example.com",
  //     name: "User 5",
  //     password_hash: hashedPasswords[4],
  //     self_intro: "hello 5",
  //   },
  //   {
  //     username: "user6",
  //     email: "user6@example.com",
  //     name: "User 6",
  //     password_hash: hashedPasswords[5],
  //     self_intro: "hello 6",
  //   },
  //   {
  //     username: "user7",
  //     email: "user7@example.com",
  //     name: "User 7",
  //     password_hash: hashedPasswords[6],
  //     self_intro: "hello 7",
  //   },
  //   {
  //     username: "user8",
  //     email: "user8@example.com",
  //     name: "User 8",
  //     password_hash: hashedPasswords[7],
  //     self_intro: "hello 8",
  //   },
  //   {
  //     username: "user9",
  //     email: "user9@example.com",
  //     name: "User 9",
  //     password_hash: hashedPasswords[8],
  //     self_intro: "hello 9",
  //   },
  //   {
  //     username: "user10",
  //     email: "user10@example.com",
  //     name: "User 10",
  //     password_hash: hashedPasswords[9],
  //     self_intro: "hello 10",
  //   },
  //   {
  //     username: "user11",
  //     email: "user11@example.com",
  //     name: "User 11",
  //     password_hash: hashedPasswords[10],
  //     self_intro: "hello 11",
  //   },
  //   {
  //     username: "user12",
  //     email: "user12@example.com",
  //     name: "User 12",
  //     password_hash: hashedPasswords[11],
  //     self_intro: "hello 12",
  //   },
  //   {
  //     username: "joan",
  //     email: "joanzz@example.com",
  //     name: "Joan Zao",
  //     password_hash: hashedPasswords[12],
  //     self_intro:
  //       " Hello! I'm Joan, a passionate software engineer with over 5 years of experience specializing in full-stack web development, mobile app development, cloud computing.",
  //   },
  // ]);
};
