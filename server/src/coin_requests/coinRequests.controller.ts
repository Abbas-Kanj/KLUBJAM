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
import { CoinRequestsService } from './coinRequests.service';
import { CreateCoinRequestDto } from './dto/create-coinRequest.dto';
import { Coin_Requests } from '@prisma/client';

@Controller('coinRequests')
export class CoinRequestsController {
  constructor(private readonly coinRequestsService: CoinRequestsService) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async createCoinRequest(
    @Body() createCoinRequestDto: CreateCoinRequestDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Coin_Requests | { status: number; message: string }> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }
      const createdCoinRequest =
        await this.coinRequestsService.createCoinRequest(
          createCoinRequestDto,
          userId,
        );
      return response.status(201).json({
        status: 'Ok!',
        message: 'Coin Request created successfully!',
        result: createdCoinRequest,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
