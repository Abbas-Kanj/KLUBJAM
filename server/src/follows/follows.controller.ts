import { Body, Controller, Delete, Param, Post, Res } from '@nestjs/common';
import { Follows } from '@prisma/client';
import { FollowsService } from './follows.service';
import { CreateFollowDto } from './dto/create-follow.dto';

@Controller('Follows')
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  @Post(':id')
  async createFollow(
    @Body() createFollowDto: CreateFollowDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Follows | { status: number; message: string }> {
    try {
      const follower_id = parseInt(id, 10);
      if (isNaN(follower_id)) {
        throw new Error('Invalid post ID');
      }
      const following_id = parseInt(String(createFollowDto.following_id), 10);

      if (!following_id) {
        throw new Error('User ID is required');
      }
      const createdFollow = await this.followsService.createFollow(
        follower_id,
        following_id,
      );
      return response.status(201).json({
        status: 'Ok!',
        message: 'follow created successfully!',
        result: createdFollow,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }

  @Delete(':id')
  async deleteFollow(@Param('id') id: string, @Res() response): Promise<any> {
    try {
      const followId = parseInt(id, 10);
      if (isNaN(followId)) {
        throw new Error('Invalid follow ID');
      }
      await this.followsService.deleteFollow(followId);
      return response.status(200).json({
        status: 'Ok!',
        message: 'follow removed successfully!',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
