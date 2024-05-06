import {
  Body,
  Controller,
  Post,
  Res,
  Param,
  Get,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { JwtAuthGuard } from 'src/authentication/auth.guard';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get(':id')
  async getUserProjects(@Param('id') id: string): Promise<any> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }

      const userPosts = await this.projectsService.getProjectsByUserId(userId);
      return {
        status: 'Ok!',
        message: 'Successfully fetched user posts!',
        result: userPosts,
      };
    } catch (error) {
      return {
        status: 'Error!',
        message: error.message || 'Controller error',
      };
    }
  }
}
