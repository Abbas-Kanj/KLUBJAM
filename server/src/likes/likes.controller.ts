import { Body, Controller, Delete, Param, Post, Res } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { response } from 'express';
import { Likes } from '@prisma/client';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post(':id')
  async createLike(
    @Body() createLikeDto: CreateLikeDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Likes | { status: number; message: string }> {
    try {
      const postId = parseInt(id, 10);
      if (isNaN(postId)) {
        throw new Error('Invalid post ID');
      }
      const userId = parseInt(String(createLikeDto.userId), 10);

      if (!userId) {
        throw new Error('User ID is required');
      }
      const createdLike = await this.likesService.createLike(
        createLikeDto,
        postId,
        userId,
      );
      return response.status(201).json({
        status: 'Ok!',
        message: 'like created successfully!',
        result: createdLike,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }

  @Delete(':id')
  async deleteLike(@Param('id') id: string, @Res() response): Promise<any> {
    try {
      const likeId = parseInt(id, 10);
      if (isNaN(likeId)) {
        throw new Error('Invalid like ID');
      }
      await this.likesService.deleteLike(likeId);
      return response.status(200).json({
        status: 'Ok!',
        message: 'like removed successfully!',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
