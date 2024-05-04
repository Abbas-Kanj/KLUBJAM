import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Follows } from '@prisma/client';
import { FollowsService } from './follows.service';
import { CreateFollowDto } from './dto/create-follow.dto';

@Controller('Follows')
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  @Get(':id')
  async getMutualConnections(@Param('id') id: string): Promise<any[]> {
    const userId = parseInt(id, 10);

    return this.followsService.getMutualConnections(userId);
  }

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

  @Delete(':requesterId/:unfollowUserId')
  async deleteFollow(
    @Param('requesterId') requesterId: string,
    @Param('unfollowUserId') unfollowUserId: string,
    @Res() response,
  ): Promise<any> {
    try {
      const requesterIdNum = parseInt(requesterId, 10);
      const unfollowUserIdNum = parseInt(unfollowUserId, 10);
      if (isNaN(requesterIdNum) || isNaN(unfollowUserIdNum)) {
        throw new Error('Invalid requester ID or unfollow user ID');
      }
      await this.followsService.deleteFollow(requesterIdNum, unfollowUserIdNum);
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
