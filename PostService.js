import Post from './Post.js';
import FileService from './FileService.js';

class PostService {
  async create(post, picture) {
    try {
      const fileName = await FileService.saveFile(picture);
      const createdPost = await Post.create({
        ...post,
        picture: fileName,
      });
      return createdPost;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const posts = await Post.find();
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async getOne(id) {
    try {
      if (!id) {
        throw new Error('Id not found');
      }
      const post = await Post.findById(id);
      return post;
    } catch (error) {
      throw error;
    }
  }

  async update(post) {
    try {
      if (!post._id) {
        throw new Error('Id not found');
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return updatedPost;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('Id not found');
      }
      const post = await Post.findByIdAndDelete(id);
      return post;
    } catch (error) {
      throw error;
    }
  }
}

export default new PostService();
