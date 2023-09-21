import * as NJSC from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@NJSC.Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private fileService: FilesService,
  ) {}

  async createPost(createPostDto: CreatePostDto, image: any) {
    // const fileName = await this.fileService.createFile(image);
    const post = await this.postRepository.create({
      ...createPostDto,
      image,
    });
    return post;
  }

  async getPostById(id: string) {
    const post = await this.postRepository.findByPk(id);
    if (!post) {
      throw new NJSC.HttpException('Пост не найден', NJSC.HttpStatus.NOT_FOUND);
    }
    return post;
  }

  async getAllPosts() {
    const posts = await this.postRepository.findAll();
    return posts;
  }

  async updatePost(id: string, updatePostDto: CreatePostDto) {
    const post = await this.postRepository.findByPk(id);
    if (!post) {
      throw new NJSC.HttpException('Пост не найден', NJSC.HttpStatus.NOT_FOUND);
    }
    await post.update(updatePostDto);
    return post;
  }

  async deletePost(id: string) {
    const post = await this.postRepository.findByPk(id);
    if (!post) {
      throw new NJSC.HttpException('Пост не найден', NJSC.HttpStatus.NOT_FOUND);
    }
    await post.destroy();
  }
}
