import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FindAllQueryDto {
  @IsNumber()
  @IsOptional()
  @Transform((x) => parseInt(x.value))
  page: number;

  @IsNumber()
  @IsOptional()
  @Transform((x) => parseInt(x.value))
  limit: number;

  @IsString()
  @IsOptional()
  search?: string;
}
