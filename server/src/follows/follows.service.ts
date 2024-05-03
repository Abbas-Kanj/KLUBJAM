import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FollowsService {
  constructor(private readonly prisma: PrismaService) {}

  async createFollow(follower_id: number, following_id: number) {
    const existingFollow = await this.prisma.follows.findFirst({
      where: {
        follower_id: following_id,
        following_id: follower_id,
      },
    });
    if (existingFollow) {
      throw new Error('Follow relationship already exists');
    }
    return await this.prisma.follows.create({
      data: {
        follower_id: following_id,
        following_id: follower_id,
      },
    });
  }

  async deleteFollow(followId: number): Promise<void> {
    await this.prisma.follows.delete({
      where: {
        id: followId,
      },
    });
  }
}
