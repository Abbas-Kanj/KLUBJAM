import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(
    createPostDto: CreatePostDto,
    userId: number,
    filename: string, // Add filename parameter
  ): Promise<Posts> {
    try {
      console.log(filename);

      const post = await this.prisma.posts.create({
        data: {
          ...createPostDto,
          post_picture: filename, // Set the post_picture field to the filename
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
}
