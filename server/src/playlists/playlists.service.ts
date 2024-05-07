import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Playlists } from '@prisma/client';

@Injectable()
export class PlaylistsService {
  constructor(private readonly prisma: PrismaService) {}

  async createPlaylist(
    createPlaylistDto: CreatePlaylistDto,
    userId: number,
    trackIds: number[],
  ): Promise<Playlists> {
    try {
      const playlist = await this.prisma.playlists.create({
        data: {
          ...createPlaylistDto,
          user: {
            connect: {
              id: userId,
            },
          },
          tracks: {
            connect: trackIds.map((id) => ({ id })),
          },
        },
      });
      return playlist;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred creating the playlist');
    }
  }
}
