import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/authentication/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  // @UseGuards(JwtAuthGuard)
  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.userService.getAllUser();
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'Ok!',
        message: 'Internal Server Error!',
      });
    }
  }

  @Get(':id')
  async getUserById(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const userId = parseInt(id, 10);
      const result = await this.userService.getUserById(userId);
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'Ok!',
        message: 'Internal Server Error!',
      });
    }
  }

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const createdUser = await this.userService.createUser(createUserDto);
      return response.status(201).json({
        status: 'Ok!',
        message: 'User created successfully!',
        result: createdUser,
      });
    } catch (error) {
      if (error instanceof ConflictException) {
        return response.status(409).json({
          status: 'Error!',
          message: error.message,
        });
      } else {
        return response.status(500).json({
          status: 'Error!',
          message: 'Internal Server Error!',
        });
      }
    }
  }

  @Post(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const userId = parseInt(id, 10);
      const result = await this.userService.updateUser(userId, updateUserDto);
      return response.status(201).json({
        status: 'Ok!',
        message: 'Successfully updated user!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'Ok!',
        message: 'controller error!' + err.message,
      });
    }
  }

  @Delete(':id')
  async deleteUserById(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const userId = parseInt(id, 10);
      const result = await this.userService.deleteUser(userId);
      return response.status(200).json({
        status: 'Ok!',
        message: 'User deleted successfully!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'Error!',
        message: 'Internal Server Error!' + err.message,
      });
    }
  }
}
