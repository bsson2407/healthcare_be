import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ obj, key }) => obj[key]?.trim())
  @ApiProperty({ example: '0123456789' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '123123' })
  password: string;
}
