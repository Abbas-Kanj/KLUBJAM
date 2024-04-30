import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  caption: string;
  @IsNotEmpty()
  @MaxLength(100)
  post_picture: string;
  @MaxLength(45)
  hashtags?: string;
  userId: number;
}
