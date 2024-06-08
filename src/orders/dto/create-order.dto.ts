import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  id: number;

  @IsNotEmpty()
  orderNumber: string;

  @IsNotEmpty()
  description: string;

  @IsInt()
  price: number;

  @IsInt()
  @IsOptional()
  quantity: number = 1;
}
