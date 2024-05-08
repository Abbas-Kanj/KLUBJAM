import { ArrayMinSize, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  project_name: string;
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  privacy: string;
  @IsOptional()
  track_name: string;
  @IsOptional()
  track_image: string;
  @IsOptional()
  audio_url: string;
  @IsOptional()
  duration: string;
  @IsOptional()
  genre: string;
  @IsNotEmpty()
  @IsInt()
  creatorId: number;
  @IsOptional()
  @IsInt({ each: true })
  @ArrayMinSize(1)
  collaborators?: number[];
}
