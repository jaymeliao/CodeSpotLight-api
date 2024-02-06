const knex = require("knex")(require("../knexfile"));

const getPosts = async (req, res) => {
  try {
    // Fetch all basic post details along with the user's username and name
    const posts = await knex("posts")
      .select(
        "posts.*",
        "users.username as authorUsername",
        "users.name as authorName"
      )
      .leftJoin("users", "posts.user_id", "users.id");

    // Initialize an async function to fetch and aggregate data for each post
    const fetchPostDetails = async (post) => {
      const comments = await knex("comments").where("post_id", post.id);

      const likes = await knex("likes").where("post_id", post.id);

      const media = await knex("media").where("post_id", post.id);

      const tags = await knex("tags")
        .join("post_tags", "tags.id", "post_tags.tag_id")
        .where("post_tags.post_id", post.id)
        .select("tags.name");

      return {
        ...post,
        comments,
        likes,
        media,
        tags: tags.map((tag) => tag.name),
      };
    };
    //===================================
    let results = [];
    for (const post of posts) {
      const detailedPost = await fetchPostDetails(post); // Fetch details for each post sequentially
      results.push(detailedPost); // Add the detailed post to the results array
    }
    // or Use Promise.all to fetch details for all posts concurrently
    //const results = await Promise.all(posts.map(fetchPostDetails));

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPostsByUser = async (req, res) => {
  try {
    // Fetch all posts by a specific user
    const posts = await knex("posts")
      .select(
        "posts.*",
        "users.username as authorUsername",
        "users.name as authorName"
      )
      .leftJoin("users", "posts.user_id", "users.id")
      .where("posts.user_id", req.params.userId);

    // Function to fetch and aggregate details for each post
    const fetchPostDetails = async (post) => {
      const comments = await knex("comments").where("post_id", post.id);
      const likes = await knex("likes").where("post_id", post.id);
      const media = await knex("media").where("post_id", post.id);
      const tags = await knex("tags")
        .join("post_tags", "tags.id", "post_tags.tag_id")
        .where("post_tags.post_id", post.id)
        .select("tags.name");

      return {
        ...post,
        comments,
        likes,
        media,
        tags: tags.map((tag) => tag.name),
      };
    };

    // Sequentially fetch details for all posts by the user
    let results = [];
    for (const post of posts) {
      const detailedPost = await fetchPostDetails(post);
      results.push(detailedPost);
    }

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPostByPostId = async (req, res) => {
  try {
    // Fetch the basic post details along with the user's username and name
    const postDetails = await knex("posts")
      .select(
        "posts.*",
        "users.username as authorUsername",
        "users.name as authorName"
      )
      .where("posts.id", req.params.postId)
      .leftJoin("users", "posts.user_id", "users.id")
      .first();

    if (!postDetails) {
      return res.status(404).json({ message: "Post not found" });
    }
    const comments = await knex("comments").where("post_id", postDetails.id);

    const likes = await knex("likes").where("post_id", postDetails.id);

    const media = await knex("media").where("post_id", postDetails.id);

    const tags = await knex("tags")
      .join("post_tags", "tags.id", "post_tags.tag_id")
      .where("post_tags.post_id", postDetails.id)
      .select("tags.name");

    const result = {
      ...postDetails,
      comments,
      likes,
      media,
      tags: tags.map((tag) => tag.name),
    };

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
    getPosts,
  getPostsByUser,
  getPostByPostId,
};
