import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  const mockPostsService = {
    getAllPosts: jest.fn(),
    getPostsByUserId: jest.fn(),
    createPost: jest.fn(),
    updatePost: jest.fn(),
    deletePost: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        {
          provide: PostsService,
          useValue: mockPostsService,
        },
      ],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllPosts', () => {
    it('should return all posts', async () => {
      const result = [{ id: 1, caption: 'Test Post' }];
      mockPostsService.getAllPosts.mockResolvedValue(result);

      expect(await controller.getAllPosts()).toEqual({
        status: 'Ok!',
        message: 'Posts retrieved successfully',
        result: result,
      });
    });

    it('should throw an exception if no posts are found', async () => {
      mockPostsService.getAllPosts.mockResolvedValue([]);

      await expect(controller.getAllPosts()).rejects.toThrow(
        new HttpException('No posts found', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('getPostsByUserId', () => {
    it('should return posts by user ID', async () => {
      const result = [{ id: 1, caption: 'Test Post', userId: 1 }];
      mockPostsService.getPostsByUserId.mockResolvedValue(result);

      expect(await controller.getPostsByUserId('1')).toEqual({
        status: 'Ok!',
        message: 'User posts retrieved successfully',
        result: result,
      });
    });

    it('should throw an exception if no posts are found for the user', async () => {
      mockPostsService.getPostsByUserId.mockResolvedValue([]);

      await expect(controller.getPostsByUserId('1')).rejects.toThrow(
        new HttpException('No posts found for the user', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('createPost', () => {
    it('should create a new post', async () => {
      const postData: Prisma.PostsCreateInput = {
        caption: 'Test Post',
        post_picture: '',
        hashtags: '',
        user: {
          create: undefined,
          connectOrCreate: {
            where: undefined,
            create: undefined,
          },
          connect: undefined,
        },
      };
      const result = { id: 1, ...postData };
      mockPostsService.createPost.mockResolvedValue(result);

      expect(await controller.createPost(postData, '1')).toEqual({
        status: 'Ok!',
        message: 'Post created successfully',
        result: result,
      });
    });

    it('should throw an exception if failed to create post', async () => {
      const postData: Prisma.PostsCreateInput = {
        caption: 'Test Post',
        post_picture: '',
        hashtags: '',
        user: {
          create: undefined,
          connectOrCreate: {
            where: undefined,
            create: undefined,
          },
          connect: undefined,
        },
      };
      mockPostsService.createPost.mockResolvedValue(null);

      await expect(controller.createPost(postData, '1')).rejects.toThrow(
        new HttpException('Failed to create post', HttpStatus.BAD_REQUEST),
      );
    });
  });

  describe('updatePost', () => {
    it('should update a post', async () => {
      const postData: Prisma.PostsUpdateInput = { caption: 'Updated Post' };
      const result = { id: 1, ...postData };
      mockPostsService.updatePost.mockResolvedValue(result);

      expect(await controller.updatePost('1', postData)).toEqual({
        status: 'Ok!',
        message: 'Post updated successfully',
        result: result,
      });
    });

    it('should throw an exception if failed to update post', async () => {
      const postData: Prisma.PostsUpdateInput = { caption: 'Updated Post' };
      mockPostsService.updatePost.mockResolvedValue(null);

      await expect(controller.updatePost('1', postData)).rejects.toThrow(
        new HttpException('Failed to update post', HttpStatus.BAD_REQUEST),
      );
    });
  });
});
