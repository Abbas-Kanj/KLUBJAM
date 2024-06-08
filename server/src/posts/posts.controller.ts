import {
  Body,
  Controller,
  Post,
  Param,
  Get,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../authentication/auth.guard';

interface ApiResponse {
  status: string;
  message: string;
  result?: any;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllPosts(): Promise<ApiResponse> {
    const result = await this.postsService.getAllPosts();

    if (result.length === 0) {
      throw new HttpException('No posts found', HttpStatus.NOT_FOUND);
    }

    return {
      status: 'Ok!',
      message: 'Posts retrieved successfully',
      result: result,
    };
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
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
      message: 'User posts retrieved successfully',
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

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updatePost(
    @Param('id') id: string,
    @Body() postData: Prisma.PostsUpdateInput,
  ): Promise<ApiResponse> {
    const postId = parseInt(id, 10);

    const result = await this.postsService.updatePost(postId, postData);

    if (!result) {
      throw new HttpException('Failed to update post', HttpStatus.BAD_REQUEST);
    }

    return {
      status: 'Ok!',
      message: 'Post updated successfully',
      result: result,
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deletePost(@Param('id') id: string): Promise<ApiResponse> {
    const postId = parseInt(id, 10);
    const result = await this.postsService.deletePost(postId);

    return {
      status: 'Ok!',
      message: 'Post deleted successfully',
      result: result,
    };
  }
}
