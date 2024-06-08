import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  id: number;

  @IsInt()
  userId: number;

  @IsNotEmpty()
  orderNumber: string;

  @IsNotEmpty()
  description: string;

  @IsInt()
  price: number;

  @IsInt()
  @IsOptional()
  quantity: number = 1;

  @IsDate()
  date: Date;

  @IsString()
  customerName: string;

  @IsString()
  customerPhone: string;

  @IsString()
  @IsOptional()
  customerNotes: string;

  @IsBoolean()
  isSelfPickup: boolean;

  @IsString()
  @IsOptional()
  deliveryAddress: string;
}
