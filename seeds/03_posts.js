const postsData=require("../seed-data/postsData")
exports.seed = async function(knex) {
  await knex('posts').del()
  await knex('posts').insert(postsData);
};
