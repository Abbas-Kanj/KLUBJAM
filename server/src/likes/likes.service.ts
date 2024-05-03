import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateLikeDto } from './dto/create-like.dto';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}

  async createLike(
    createLikeDto: CreateLikeDto,
    postId: number,
    userId: number,
  ) {
    const existingLike = await this.prisma.likes.findFirst({
      where: {
        post_id: postId,
        user_id: userId,
      },
    });
    if (existingLike) {
      throw new Error('User already liked this post');
    }
    return await this.prisma.likes.create({
      data: {
        post_id: postId,
        user_id: userId,
      },
    });
  }

  async deleteLike(likeId: number): Promise<void> {
    await this.prisma.likes.delete({
      where: {
        id: likeId,
      },
    });
  }
}
