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
import { Playlists, Posts } from '@prisma/client';
import { Response } from 'express';

import { JwtAuthGuard } from 'src/authentication/auth.guard';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllPLaylists(@Res() response: Response): Promise<any> {
    try {
      const result = await this.playlistsService.getAllPLaylists();
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 500,
        message: 'Internal Server Error!',
      });
    }
  }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async createPlaylist(
    @Param('id') id: string,
    @Body() createPlaylistDto: CreatePlaylistDto,
    @Body('trackIds') trackIds: number[],
    @Res() response,
  ): Promise<Playlists | { status: number; message: string }> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }

      const createdPlaylist = await this.playlistsService.createPlaylist(
        userId,
        createPlaylistDto,
        trackIds,
      );
      return response.status(201).json({
        status: 'Ok!',
        message: 'Playlist created successfully!',
        result: createdPlaylist,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
