import { Injectable } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FollowsService {
  constructor(private readonly prisma: PrismaService) {}

  async createFollow(
    createFollowDto: CreateFollowDto,
    follower_id: number,
    following_id: number,
  ) {
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
}
