import { Body, Controller, Delete, Param, Post, Res } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { Likes } from '@prisma/client';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post(':postId/:userId')
  async createLike(
    @Body() createLikeDto: CreateLikeDto,
    @Res() response,
    @Param('postId') postId: string,
    @Param('userId') userId: string,
  ): Promise<Likes | { status: number; message: string }> {
    try {
      const parsedPostId = parseInt(postId, 10);
      const parsedUserId = parseInt(userId, 10);

      if (isNaN(parsedPostId) || isNaN(parsedUserId)) {
        throw new Error('Invalid post ID or user ID');
      }

      if (!createLikeDto) {
        throw new Error('Like data is required');
      }

      const createdLike = await this.likesService.createLike(
        createLikeDto,
        parsedPostId,
        parsedUserId,
      );

      return response.status(201).json({
        status: 'Ok!',
        message: 'Like created successfully!',
        result: createdLike,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }

  @Delete(':postId/:userId')
  async deleteLike(
    @Param('postId') postId: string,
    @Param('userId') userId: string,
    @Res() response,
  ): Promise<any> {
    try {
      const postIdNum = parseInt(postId, 10);
      const userIdNum = parseInt(userId, 10);

      if (isNaN(postIdNum) || isNaN(userIdNum)) {
        throw new Error('Invalid post ID or user ID');
      }

      await this.likesService.deleteLike(postIdNum, userIdNum);

      return response.status(200).json({
        status: 'Ok!',
        message: 'Like removed successfully!',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
