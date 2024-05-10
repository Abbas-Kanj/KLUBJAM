import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comments } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllComments(): Promise<Comments[]> {
    return this.prisma.comments.findMany({
      include: {
        user: true,
      },
    });
  }
  async createComment(
    createCommentDto: CreateCommentDto,
    postId: number,
    userId: number,
  ) {
    const { content } = createCommentDto;
    return await this.prisma.comments.create({
      data: {
        content,
        post_id: postId,
        user_id: userId,
      },
    });
  }

  async deleteComment(commentId: number): Promise<void> {
    await this.prisma.comments.delete({
      where: {
        id: commentId,
      },
    });
  }
}
