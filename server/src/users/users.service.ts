import { Users } from './users.model';
import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUser(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    try {
      const user = await this.prisma.users.create({
        data: createUserDto,
      });
      return user;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email or username already exists');
      } else {
        throw error;
      }
    }
  }

  async getUserById(id: number): Promise<Users | null> {
    return this.prisma.users.findUnique({ where: { id } });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    return this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async deleteUser(userId: number): Promise<void> {
    try {
      await this.prisma.$transaction([
        this.prisma.posts.deleteMany({
          where: {
            user_id: userId,
          },
        }),
        this.prisma.playlists.deleteMany({
          where: {
            user_id: userId,
          },
        }),
        this.prisma.comments.deleteMany({
          where: {
            user_id: userId,
          },
        }),
        this.prisma.projects.deleteMany({
          where: {
            creator_id: userId,
          },
        }),
        this.prisma.albums.deleteMany({
          where: {
            user_id: userId,
          },
        }),
        this.prisma.tracks.deleteMany({
          where: {
            user_id: userId,
          },
        }),
        this.prisma.follows.deleteMany({
          where: {
            OR: [{ follower_id: userId }, { following_id: userId }],
          },
        }),
        this.prisma.coin_Requests.deleteMany({
          where: {
            user_id: userId,
          },
        }),
        this.prisma.users.delete({
          where: {
            id: userId,
          },
        }),
      ]);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user');
    }
  }
}
