import { Body, Controller, Param, Post, Res } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comments } from '@prisma/client';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

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
}
