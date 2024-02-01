// seeds/02_tags.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries to avoid duplicates
  await knex('tags').del();

  // Inserts seed entries
  await knex('tags').insert([
    { name: 'Typescript' },
    { name: 'AWS' },
    { name: 'JavaScrpt' },
    { name: 'Photography' },
    { name: 'Lifestyle' },
    { name: 'Fitness' },
    { name: 'Education' },
    { name: 'DIY' },
    { name: 'Gaming' },
    { name: 'Fashion' }
  ]);
};
