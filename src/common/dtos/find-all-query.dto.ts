import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

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
  @Transform((x) => (x.value === '' ? undefined : x.value))
  search?: string;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => {
    if (value) {
      const currentDate = new Date(value);
      currentDate.setHours(0);
      currentDate.setMinutes(0);
      currentDate.setSeconds(0);
      currentDate.setMilliseconds(0);
      return currentDate;
    }
  })
  fromDate?: Date;
}
