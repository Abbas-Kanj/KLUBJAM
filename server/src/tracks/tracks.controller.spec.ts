import { Test, TestingModule } from '@nestjs/testing';
import { Response } from 'express';
import { JwtAuthGuard } from '../authentication/auth.guard';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';

describe('TracksController', () => {
  let controller: TracksController;
  let tracksService: TracksService;

  const mockTracksService = {
    getAllTracks: jest.fn(),
    getAllTracksForUser: jest.fn(),
    createTrack: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TracksController],
      providers: [{ provide: TracksService, useValue: mockTracksService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn().mockReturnValue(true) })
      .compile();

    controller = module.get<TracksController>(TracksController);
    tracksService = module.get<TracksService>(TracksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllTracks', () => {
    it('should return all tracks', async () => {
      const mockTracks = [{ id: 1, title: 'Test Track' }];
      mockTracksService.getAllTracks.mockResolvedValue(mockTracks);
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.getAllTracks(res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: mockTracks,
      });
    });

    it('should handle errors', async () => {
      mockTracksService.getAllTracks.mockRejectedValue(new Error('Test Error'));
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.getAllTracks(res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 500,
        message: 'Internal Server Error!',
      });
    });
  });
});
