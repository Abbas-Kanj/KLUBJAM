import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  @IsInt()
  userId: number;
  @IsNotEmpty()
  @IsInt()
  postId: number;
}
