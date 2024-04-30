import {
  Body,
  ConflictException,
  Controller,
  Post,
  HttpStatus,
  Res,
  Param,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from '@prisma/client';
import { response } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post(':id')
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
}
