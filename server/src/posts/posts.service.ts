import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPosts(): Promise<Posts[]> {
    return this.prisma.posts.findMany();
  }

  async getPostsByUserId(userId: number): Promise<any> {
    return this.prisma.posts.findMany({
      where: {
        user_id: userId,
      },
    });
  }
  async createPost(
    createPostDto: CreatePostDto,
    userId: number,
  ): Promise<Posts> {
    try {
      const post = await this.prisma.posts.create({
        data: {
          ...createPostDto,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return post;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred creating the post');
    }
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
