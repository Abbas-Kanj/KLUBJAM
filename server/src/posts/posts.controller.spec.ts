import { Test, TestingModule } from '@nestjs/testing';
import { Response } from 'express';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaService } from '../prisma.service';
import { JwtAuthGuard } from '../authentication/auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

describe('PostsController', () => {
  let controller: PostsController;
  let postsService: PostsService;
  let prismaService: PrismaService;

  const mockPostsService = {
    getAllPosts: jest.fn(),
    getPostsByUserId: jest.fn(),
    createPost: jest.fn(),
    updatePost: jest.fn(),
    deletePost: jest.fn(),
  };

  const mockPrismaService = {};

  const mockResponse = () => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res as Response;
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        { provide: PostsService, useValue: mockPostsService },
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn().mockReturnValue(true) })
      .compile();

    controller = module.get<PostsController>(PostsController);
    postsService = module.get<PostsService>(PostsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllPosts', () => {
    it('should return all posts', async () => {
      const mockPosts = [{ id: 1, title: 'Test Post' }];
      mockPostsService.getAllPosts.mockResolvedValue(mockPosts);
      const res = mockResponse();

      await controller.getAllPosts(res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: mockPosts,
      });
    });

    it('should handle errors', async () => {
      mockPostsService.getAllPosts.mockRejectedValue(new Error('Test Error'));
      const res = mockResponse();

      await controller.getAllPosts(res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 500,
        message: 'Internal Server Error!',
      });
    });
  });

  describe('getUserPosts', () => {
    it('should return posts by user ID', async () => {
      const mockPosts = [{ id: 1, title: 'Test Post' }];
      mockPostsService.getPostsByUserId.mockResolvedValue(mockPosts);

      const result = await controller.getUserPosts('1');

      expect(result).toEqual({
        status: 'Ok!',
        message: 'Successfully fetched user posts!',
        result: mockPosts,
      });
    });

    it('should handle invalid user ID', async () => {
      const result = await controller.getUserPosts('invalid');

      expect(result).toEqual({
        status: 'Error!',
        message: 'Invalid user ID',
      });
    });

    it('should handle errors', async () => {
      mockPostsService.getPostsByUserId.mockRejectedValue(
        new Error('Test Error'),
      );

      const result = await controller.getUserPosts('1');

      expect(result).toEqual({
        status: 'Error!',
        message: 'Test Error',
      });
    });
  });

  describe('createPost', () => {
    it('should create a new post', async () => {
      const mockPost = {
        id: 1,
        caption: 'Test Post',
        post_picture: 'url',
        hashtags: 'hashtags',
      };
      const createPostDto: CreatePostDto = {
        post_picture: 'Test Post',
        caption: 'This is a test post',
        hashtags: 'hashtags',
        userId: 1,
      };
      mockPostsService.createPost.mockResolvedValue(mockPost);
      const res = mockResponse();

      await controller.createPost(createPostDto, res, '1');

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Post created successfully!',
        result: mockPost,
      });
    });

    it('should handle invalid user ID', async () => {
      const createPostDto: CreatePostDto = {
        post_picture: 'Test Post',
        caption: 'This is a test post',
        hashtags: 'hashtags',
        userId: 1,
      };
      const res = mockResponse();

      await controller.createPost(createPostDto, res, 'invalid');

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Error!',
        message: 'Invalid user ID',
      });
    });

    it('should handle other errors', async () => {
      const createPostDto: CreatePostDto = {
        post_picture: 'Test Post',
        caption: 'This is a test post',
        hashtags: 'hashtags',
        userId: 1,
      };
      mockPostsService.createPost.mockRejectedValue(new Error('Test Error'));
      const res = mockResponse();

      await controller.createPost(createPostDto, res, '1');

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Error!',
        message: 'Test Error',
      });
    });
  });

  describe('updatePost', () => {
    it('should update a post', async () => {
      const mockPost = { id: 1, title: 'Updated Post' };
      const updatePostDto: UpdatePostDto = {
        post_picture: 'Test Post',
        caption: 'This is a test post',
        hashtags: 'hashtags',
        userId: 1,
      };
      mockPostsService.updatePost.mockResolvedValue(mockPost);
      const res = mockResponse();

      await controller.updatePost('1', updatePostDto, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Post updated successfully!',
        result: mockPost,
      });
    });

    it('should handle invalid post ID', async () => {
      const updatePostDto: UpdatePostDto = { caption: 'Updated Post' };
      const res = mockResponse();

      await controller.updatePost('invalid', updatePostDto, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Error!',
        message: 'Invalid post ID',
      });
    });

    it('should handle errors', async () => {
      const updatePostDto: UpdatePostDto = { caption: 'Updated Post' };
      mockPostsService.updatePost.mockRejectedValue(new Error('Test Error'));
      const res = mockResponse();

      await controller.updatePost('1', updatePostDto, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Error!',
        message: 'Test Error',
      });
    });
  });

  describe('deletePost', () => {
    it('should delete a post by ID', async () => {
      const mockPost = { id: 1, title: 'Deleted Post' };
      mockPostsService.deletePost.mockResolvedValue(mockPost);
      const res = mockResponse();

      await controller.deletePost('1', res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Post deleted successfully!',
      });
    });

    it('should handle invalid post ID', async () => {
      const res = mockResponse();

      await controller.deletePost('invalid', res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Error!',
        message: 'Invalid post ID',
      });
    });

    it('should handle errors', async () => {
      mockPostsService.deletePost.mockRejectedValue(new Error('Test Error'));
      const res = mockResponse();

      await controller.deletePost('1', res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Error!',
        message: 'Test Error',
      });
    });
  });
});
