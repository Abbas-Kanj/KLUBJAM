import {
  Body,
  Controller,
  Post,
  Res,
  Param,
  Get,
  Delete,
  Put,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from '@prisma/client';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from '../authentication/auth.guard';
import { AllExceptionsFilter } from 'src/http-exception.filter';
import { Posts as PostModel } from '@prisma/client';

@Controller('posts')
@UseFilters(AllExceptionsFilter)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<any> {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  async getPostsByUserId(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.getPostsByUserId({ id: Number(id) });
  }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async createPost(
    @Body() createPostDto: CreatePostDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Posts | { status: number; message: string }> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }

      const createdPost = await this.postsService.createPost(
        createPostDto,
        userId,
      );
      return response.status(201).json({
        status: 'Ok!',
        message: 'Post created successfully!',
        result: createdPost,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Res() response,
  ): Promise<any> {
    try {
      const postId = parseInt(id, 10);
      if (isNaN(postId)) {
        throw new Error('Invalid post ID');
      }

      const updatedPost = await this.postsService.updatePost(
        postId,
        updatePostDto,
      );

      if (!updatedPost) {
        return response.status(404).json({
          status: 'Error!',
          message: 'Post not found',
        });
      }

      return response.status(200).json({
        status: 'Ok!',
        message: 'Post updated successfully!',
        result: updatedPost,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string, @Res() response): Promise<any> {
    try {
      const postId = parseInt(id, 10);
      if (isNaN(postId)) {
        throw new Error('Invalid post ID');
      }

      await this.postsService.deletePost(postId);
      return response.status(200).json({
        status: 'Ok!',
        message: 'Post deleted successfully!',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
