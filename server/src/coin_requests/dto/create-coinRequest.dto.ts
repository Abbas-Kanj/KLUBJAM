import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCoinRequestDto {
  @IsNotEmpty()
  amount: number;
}
