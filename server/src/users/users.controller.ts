import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response, response } from 'express';
import { JwtAuthGuard } from 'src/authentication/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

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

  @Post(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const userId = parseInt(id, 10);
      const result = await this.userService.updateUser(userId, updateUserDto);
      return response.status(200).json({
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
}
