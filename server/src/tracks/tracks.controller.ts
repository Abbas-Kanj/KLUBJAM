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
import { Response, response } from 'express';
import { JwtAuthGuard } from 'src/authentication/auth.guard';
import { TracksService } from './tracks.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { Tracks } from '@prisma/client';

@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Get()
  async getAllTracks(@Res() response: Response): Promise<any> {
    try {
      const result = await this.tracksService.getAllTracks();
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
  // @UseGuards(JwtAuthGuard)
  async createTrack(
    @Body() createTrackDto: CreateTrackDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Tracks | { status: number; message: string }> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }

      const createdTrack = await this.tracksService.createTrack(
        createTrackDto,
        userId,
      );
      return response.status(201).json({
        status: 'Ok!',
        message: 'Track created successfully!',
        result: createdTrack,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
