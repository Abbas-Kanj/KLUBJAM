import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { JwtAuthGuard } from '../authentication/auth.guard';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;
  let prismaService: PrismaService;

  const mockUsersService = {
    getAllUser: jest.fn(),
    getUserById: jest.fn(),
    createUser: jest.fn(),
    updateUser: jest.fn(),
    deleteUser: jest.fn(),
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
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: mockUsersService },
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn().mockReturnValue(true) })
      .compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllUsers', () => {
    it('should return all users', async () => {
      const mockUsers = [{ id: 1, username: 'Test User' }];
      mockUsersService.getAllUser.mockResolvedValue(mockUsers);
      const res = mockResponse();

      await controller.getAllUsers(null, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: mockUsers,
      });
    });

    it('should handle errors', async () => {
      mockUsersService.getAllUser.mockRejectedValue(new Error('Test Error'));
      const res = mockResponse();

      await controller.getAllUsers(null, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Internal Server Error!',
      });
    });
  });

  describe('getUserById', () => {
    it('should return a user by ID', async () => {
      const mockUser = { id: 1, username: 'Test User' };
      mockUsersService.getUserById.mockResolvedValue(mockUser);
      const res = mockResponse();

      await controller.getUserById(null, res, '1');

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: mockUser,
      });
    });

    it('should handle errors', async () => {
      mockUsersService.getUserById.mockRejectedValue(new Error('Test Error'));
      const res = mockResponse();

      await controller.getUserById(null, res, '1');

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Internal Server Error!',
      });
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const mockUser = { id: 1, username: 'Test User' };
      const createUserDto: CreateUserDto = {
        username: 'Test User',
        email: 'test@gmail.com',
        password: 'password',
      };
      mockUsersService.createUser.mockResolvedValue(mockUser);
      const res = mockResponse();

      await controller.createUser(createUserDto, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'User created successfully!',
        result: mockUser,
      });
    });

    it('should handle conflict errors', async () => {
      const createUserDto: CreateUserDto = {
        username: 'Test User',
        email: 'test@gmail.com',
        password: 'password',
      };
      mockUsersService.createUser.mockRejectedValue(
        new ConflictException('Conflict Error'),
      );
      const res = mockResponse();

      await controller.createUser(createUserDto, res);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Error!',
        message: 'Conflict Error',
      });
    });

    it('should handle other errors', async () => {
      const createUserDto: CreateUserDto = {
        username: 'Test User',
        email: 'test@gmail.com',
        password: 'password',
      };
      mockUsersService.createUser.mockRejectedValue(new Error('Test Error'));
      const res = mockResponse();

      await controller.createUser(createUserDto, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Error!',
        message: 'Internal Server Error!',
      });
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const mockUser = { id: 1, username: 'Updated User' };
      const updateUserDto: UpdateUserDto = { username: 'Updated User' };
      mockUsersService.updateUser.mockResolvedValue(mockUser);
      const res = mockResponse();

      await controller.updateUser('1', updateUserDto, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Successfully updated user!',
        result: mockUser,
      });
    });

    it('should handle errors', async () => {
      const updateUserDto: UpdateUserDto = { username: 'Updated User' };
      mockUsersService.updateUser.mockRejectedValue(new Error('Test Error'));
      const res = mockResponse();

      await controller.updateUser('1', updateUserDto, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'controller error!Test Error',
      });
    });
  });

  describe('deleteUserById', () => {
    it('should delete a user by ID', async () => {
      const mockUser = { id: 1, username: 'Deleted User' };
      mockUsersService.deleteUser.mockResolvedValue(mockUser);
      const res = mockResponse();

      await controller.deleteUserById('1', res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'User deleted successfully!',
        result: mockUser,
      });
    });

    it('should handle errors', async () => {
      mockUsersService.deleteUser.mockRejectedValue(new Error('Test Error'));
      const res = mockResponse();

      await controller.deleteUserById('1', res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Error!',
        message: 'Internal Server Error!Test Error',
      });
    });
  });
});
