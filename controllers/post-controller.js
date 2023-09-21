import { Post } from "../sequelize/models/Post.js";

class PostController {
  async createPost(request, response) {
    try {
      const { title, content, user_id } = request.body;
      const newPost = await Post.create({ title, content, user_id });
      response.status(200).json(newPost);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async getAllPost(request, response) {
    try {
      const user_id = request.body.user_id;
      const posts = await Post.findAll({ where: { user_id } });
      response.status(200).json(posts);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async getOnePost(request, response) {
    try {
      const { user_id, post_id } = request.body;
      const post = await Post.findOne({ where: { user_id, post_id } });
      response.status(200).json(post);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async updatePost(request, response) {
    try {
      const { post_id, user_id, title, content } = request.body;
      const [updatedRowsCount, updatedRows] = await Post.update(
        { title, content },
        { where: { user_id, post_id }, returning: true }
      );
      if (updatedRowsCount === 0) {
        response.status(404).json({ message: "Post not found or user is not authorized" });
      } else {
        response.status(200).json(updatedRows[0]);
      }
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async deletePost(request, response) {
    try {
      const { user_id, post_id } = request.body;
      const deletedRowsCount = await Post.destroy({ where: { user_id, post_id } });
      if (deletedRowsCount === 0) {
        response.status(404).json({ message: "Post not found or user is not authorized" });
      } else {
        response.status(200).json({ message: "Post deleted" });
      }
    } catch (error) {
      response.status(500).json(error);
    }
  }
}

export const postController = new PostController();