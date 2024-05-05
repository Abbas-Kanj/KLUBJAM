import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTrackDto {
  @IsNotEmpty()
  track_name: string;
  @IsNotEmpty()
  duration: string;
  @IsNotEmpty()
  audio_url: string;
  @IsNotEmpty()
  track_image: string;
  @IsNotEmpty()
  explicit: string;
  status: string;
  album_id: number;
}
