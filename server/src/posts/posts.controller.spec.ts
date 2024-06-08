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
});
