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
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from '../authentication/auth.guard';
import { Posts as PostModel } from '@prisma/client';

interface ApiResponse {
  status: string;
  message: string;
  result?: any;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<any> {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  async getPostsByUserId(@Param('id') id: string): Promise<ApiResponse> {
    const userId = Number(id);
    const result = await this.postsService.getPostsByUserId(userId);

    if (result.length === 0) {
      throw new HttpException(
        'No posts found for the user',
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      status: 'Ok!',
      message: 'Posts retrieved successfully',
      result: result,
    };
  }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async createPost(
    @Body() postData: Prisma.PostsCreateInput,
    @Param('id') id: string,
  ): Promise<ApiResponse> {
    const userId = parseInt(id, 10);
    const result = await this.postsService.createPost(postData, userId);

    if (!result) {
      throw new HttpException('Failed to create post', HttpStatus.BAD_REQUEST);
    }

    return {
      status: 'Ok!',
      message: 'Post created successfully',
      result: result,
    };
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
