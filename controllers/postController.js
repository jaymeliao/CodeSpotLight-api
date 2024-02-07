const knex = require("knex")(require("../knexfile"));

const getPosts = async (req, res) => {
  try {
    // Fetch all basic post details along with the user's username and name
    const posts = await knex("posts")
      .select(
        "posts.*",
        "users.username as authorUsername",
        "users.name as authorName",
        "users.profile_picture_url as authorProfileImageUrl"
      )
      .leftJoin("users", "posts.user_id", "users.id")
      .orderBy('posts.updated_at', 'desc') // Sort by updated_at in descending order
      .limit(10); // Optional: Pagination limit;

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
        "users.name as authorName",
        "users.profile_picture_url as authorProfileImageUrl"
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
        "users.name as authorName",
        "users.profile_picture_url as authorProfileImageUrl"
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


const formatTagName = (tagName) => {
  // Convert # to Sharp, remove spaces and dashes, then convert to CamelCase
  return tagName
    .replace("#", "Sharp")
    .replace(/\s|-/g, "")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toUpperCase() : word.toLowerCase()
    )
    .replace(/\s+/g, "");
};

const addNewPost = async (req, res) => {
  try {
    const { content, tags } = req.body;
    const userId = req.user.userId; // From auth

    // Insert the new post
    const postInsertResult = await knex("posts").insert({
      content, 
      user_id: userId
    });

    // MySQL and mysql2 driver return the insertId of the last inserted row
    const postId = postInsertResult[0];

    if (req.files) {
      const mediaFiles = req.files.map((file) => ({
        post_id: postId,
        media_url: file.path,
        media_type: file.mimetype.startsWith("video/") ? "video" : "image",
      }));
      await knex("media").insert(mediaFiles);
    }

    if (tags && tags.length > 0) {
      for (const tagName of tags.map(formatTagName)) {
        let tagId;

        // Check if the tag already exists and get its ID
        const existingTag = await knex("tags").where({ name: tagName }).first();
        if (existingTag) {
          tagId = existingTag.id;
        } else {
          // If it doesn't exist, insert the new tag and get its ID
          const newTagInsertResult = await knex("tags").insert({ name: tagName });
          tagId = newTagInsertResult[0];
        }

        // Associate the tag with the post
        await knex("post_tags").insert({
          post_id: postId,
          tag_id: tagId
        });
      }
    }

    res.status(201).json({ message: "Post created successfully", postId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getPosts,
  getPostsByUser,
  getPostByPostId,
  addNewPost,
};
