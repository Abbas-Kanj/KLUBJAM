import { Injectable } from '@nestjs/common';
import { Tracks } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTrackDto } from './dto/create-track.dto';

@Injectable()
export class TracksService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTracks(): Promise<Tracks[]> {
    return await this.prisma.tracks.findMany({
      include: {
        user: true,
      },
    });
  }

  async getAllTracksForUser(userId: number): Promise<Tracks[]> {
    return await this.prisma.tracks.findMany({
      where: {
        user_id: userId,
      },
      include: {
        user: true,
      },
    });
  }

  async createTrack(
    createTrackDto: CreateTrackDto,
    userId: number,
  ): Promise<Tracks> {
    try {
      const track = await this.prisma.tracks.create({
        data: {
          ...createTrackDto,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return track;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred creating the track');
    }
  }
}
