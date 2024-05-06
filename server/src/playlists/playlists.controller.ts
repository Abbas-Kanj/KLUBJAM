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

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async createPost(
    @Body() createPlaylistDto: CreatePlaylistDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Playlists | { status: number; message: string }> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }
      const createdPlaylist = await this.playlistsService.createPlaylist(
        createPlaylistDto,
        userId,
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
