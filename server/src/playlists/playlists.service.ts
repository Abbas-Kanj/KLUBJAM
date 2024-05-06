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
  ): Promise<Playlists> {
    try {
      const post = await this.prisma.playlists.create({
        data: {
          ...createPlaylistDto,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return post;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred creating the post');
    }
  }
}
