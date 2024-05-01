import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCoinRequestDto {
  @IsNotEmpty()
  amount: number;
  @IsNotEmpty()
  @IsInt()
  musician: number;
  @IsNotEmpty()
  @IsInt()
  admin: number;
}
