import * as NJSC from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Post } from '@nestjs/common';
import * as Swagger from '@nestjs/swagger';
import { variables } from '../variables';

@Swagger.ApiTags('Посты')
@NJSC.Controller('/api/posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Swagger.ApiOperation({ summary: 'Создание поста' })
  @Swagger.ApiResponse({ status: 200, type: Post })
  @NJSC.Post('/add')
  @NJSC.UseInterceptors(FilesInterceptor('image'))
  createPost(@NJSC.Body() createPostDto: CreatePostDto, @NJSC.UploadedFile() image: any) {
    return this.postService.createPost(createPostDto, image);
  }

  @Swagger.ApiOperation({ summary: 'Получить пост по ID' })
  @Swagger.ApiResponse({ status: 200, type: Post })
  @NJSC.Get('/:id')
  async getPostById(@NJSC.Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @Swagger.ApiOperation({ summary: 'Получить все посты' })
  @Swagger.ApiResponse({ status: 200, type: [Post] })
  @NJSC.Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Swagger.ApiOperation({ summary: 'Обновить пост' })
  @Swagger.ApiResponse({ status: 200, type: Post })
  @NJSC.Put('/:id')
  async updatePost(
    @NJSC.Param('id') id: string,
    @NJSC.Body() updatePostDto: CreatePostDto,
  ) {
    return this.postService.updatePost(id, updatePostDto);
  }

  @Swagger.ApiOperation({ summary: 'Удалить пост' })
  @Swagger.ApiResponse({ status: 200 })
  @NJSC.Delete('/:id')
  async deletePost(@NJSC.Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}
