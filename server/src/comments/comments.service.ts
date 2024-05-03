import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

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
}
