import { PrismaService } from 'src/prisma.service';
import { Users } from './users.model';
import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

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
}
