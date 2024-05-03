import {
  Body,
  Controller,
  Post,
  Res,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { Response, response } from 'express';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comments } from '@prisma/client';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async getAllComments(@Res() response: Response): Promise<any> {
    try {
      const result = await this.commentsService.getAllComments();
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 500,
        message: 'Internal Server Error!',
      });
    }
  }

  @Post(':id')
  async createComment(
    @Body() createCommentDto: CreateCommentDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Comments | { status: number; message: string }> {
    try {
      const postId = parseInt(id, 10);
      if (isNaN(postId)) {
        throw new Error('Invalid post ID');
      }
      const userId = parseInt(String(createCommentDto.userId), 10);

      if (!userId) {
        throw new Error('User ID is required');
      }
      const createdComment = await this.commentsService.createComment(
        createCommentDto,
        postId,
        userId,
      );
      return response.status(201).json({
        status: 'Ok!',
        message: 'Comment created successfully!',
        result: createdComment,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string, @Res() response): Promise<any> {
    try {
      const commentId = parseInt(id, 10);
      if (isNaN(commentId)) {
        throw new Error('Invalid post ID');
      }
      await this.commentsService.deleteComment(commentId);
      return response.status(200).json({
        status: 'Ok!',
        message: 'comment deleted successfully!',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
