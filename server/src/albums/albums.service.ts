import { Injectable } from '@nestjs/common';
import { Albums } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AlbumsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllAlbums(): Promise<Albums[]> {
    return await this.prisma.albums.findMany({});
  }
}
