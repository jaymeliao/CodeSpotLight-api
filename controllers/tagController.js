const knex = require("knex")(require("../knexfile"));

const getAllTags = async (req, res) => {
  try {
    const tags = await knex("tags").select("*");
    res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllTags,
};
