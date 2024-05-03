import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FollowsService {
  constructor(private readonly prisma: PrismaService) {}

  async getMutualConnections(
    userId: number,
  ): Promise<{ id: number; username: string; fullname: string }[]> {
    const followers = await this.prisma.follows.findMany({
      where: { following_id: userId },
      select: { follower_id: true },
    });
    const followingIds = followers.map((follow) => follow.follower_id);

    const mutualFollowers = await this.prisma.follows.findMany({
      where: {
        follower_id: { in: followingIds },
        following_id: { not: userId },
      },
      select: { following_id: true },
    });

    const mutualFollowingIds = mutualFollowers.map(
      (mutual) => mutual.following_id,
    );

    const mutualConnections = await this.prisma.users.findMany({
      where: { id: { in: mutualFollowingIds } },
      select: { id: true, username: true, fullname: true },
    });

    return mutualConnections.map((connection) => ({
      id: connection.id,
      username: connection.username,
      fullname: connection.fullname,
    }));
  }

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
