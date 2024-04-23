import { Body, Controller, Get, Req } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('getUser')
  getUser(@Body() Body) {
    return {
      id: 1,
      name: 'Nabiha',
    };
  }
}
