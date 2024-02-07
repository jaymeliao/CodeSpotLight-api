const knex = require("knex")(require("../knexfile"));

const addNewComment = async (req, res) => {
    const { postId, content } = req.body; // Extract postId and content from the request body
    const userId = req.user.userId; // Extract the user ID from the request, added by auth middleware
    
    if (!postId || !content) {
      return res.status(400).json({ message: "Post ID and content are required" });
    }
  
    try {
      const [newCommentId] = await knex('comments').insert({
        post_id: postId,
        user_id: userId,
        content: content
      });
      // for my future use, i want to use it for notification.
      const newComment = await knex('comments')
        .join('users', 'comments.user_id', 'users.id')
        .where('comments.id', newCommentId)
        .select('comments.*', 'users.username as commenterUsername', 'users.profile_picture_url as commenterProfilePictureUrl')
        .first();
  
      res.status(201).json({
        message: "Comment added successfully",
        comment: newComment
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to post comment" });
    }
  };



  module.exports = {
    addNewComment
  };
  