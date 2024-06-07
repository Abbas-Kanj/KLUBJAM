import { PrismaService } from '../prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';

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

  async getPostsByUserId(
    postsWhereUniqueInput: Prisma.PostsWhereUniqueInput,
  ): Promise<Posts> {
    return this.prisma.posts.findUnique({
      where: postsWhereUniqueInput,
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

  async updatePost(postId: number, updatePostDto: UpdatePostDto): Promise<any> {
    const existingPost = await this.prisma.posts.findUnique({
      where: {
        id: postId,
      },
    });

    if (!existingPost) {
      return null;
    }

    return this.prisma.posts.update({
      where: {
        id: postId,
      },
      data: {
        ...updatePostDto,
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
