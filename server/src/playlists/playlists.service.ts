import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Playlists } from '@prisma/client';

@Injectable()
export class PlaylistsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPLaylists(): Promise<Playlists[]> {
    const playlists = await this.prisma.playlists.findMany({
      include: {
        tracks: {
          select: {
            id: true,
            track_name: true,
            track_image: true,
            duration: true,
            audio_url: true,
            explicit: true,
          },
        },
      },
    });
    return playlists;
  }

  async createPlaylist(
    userId: number,
    createPlaylistDto: CreatePlaylistDto,
    tracks: number[],
  ): Promise<Playlists> {
    try {
      console.log(tracks);

      const playlist = await this.prisma.playlists.create({
        data: {
          ...createPlaylistDto,
          user: {
            connect: {
              id: userId,
            },
          },
          tracks: {
            connect: tracks.map((id) => ({ id: id })),
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
