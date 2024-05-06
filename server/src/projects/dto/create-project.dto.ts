import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  project_name: string;
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  privacy: string;
  @IsNotEmpty()
  track_name: string;
  @IsNotEmpty()
  track_image: string;
  @IsNotEmpty()
  audio_url: string;
  @IsNotEmpty()
  duration: string;
  @IsNotEmpty()
  genre: string;
  @IsNotEmpty()
  @IsInt()
  creator_id: number;
}
