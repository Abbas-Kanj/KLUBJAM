import {
  Body,
  Controller,
  Post,
  Res,
  Param,
  Get,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/authentication/auth.guard';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllAlbums(@Res() response: Response): Promise<any> {
    try {
      const result = await this.albumsService.getAllAlbums();
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
}
