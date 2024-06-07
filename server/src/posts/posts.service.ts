import { PrismaService } from '../prisma.service';
import { Posts, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPosts(): Promise<Posts[]> {
    const posts = await this.prisma.posts.findMany({
      include: {
        user: {
          select: {
            username: true,
            profile_picture: true,
          },
        },
        comment: {
          select: {
            id: true,
            content: true,
            user: {
              select: {
                username: true,
                profile_picture: true,
                createdAt: true,
              },
            },
          },
        },
        likes: true,
      },
    });

    return posts.map((post) => ({
      ...post,
      comments: { _count: post.comment.length },
      likes: { _count: post.likes.length },
    }));
  }

  async getPostsByUserId(userId: number): Promise<Posts[]> {
    return this.prisma.posts.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  async createPost(
    postData: Prisma.PostsCreateInput,
    userId: number,
  ): Promise<Posts> {
    return this.prisma.posts.create({
      data: {
        ...postData,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async updatePost(
    postId: number,
    postData: Prisma.PostsUpdateInput,
  ): Promise<Posts> {
    return this.prisma.posts.update({
      where: {
        id: postId,
      },
      data: {
        ...postData,
      },
    });
  }

  async deletePost(postId: number): Promise<void> {
    await this.prisma.posts.delete({
      where: {
        id: postId,
      },
    });
  }
}
