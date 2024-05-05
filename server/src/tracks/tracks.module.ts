import { Module } from '@nestjs/common';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TracksController],
  providers: [TracksService, PrismaService],
})
export class TracksModule {}
