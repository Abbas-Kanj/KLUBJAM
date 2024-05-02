import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPosts(): Promise<Posts[]> {
    return this.prisma.posts.findMany();
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
      console.error(error); // Log specific Prisma errors
      throw new Error('An error occurred creating the post'); // Informative error message
    }
  }
}
