import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    type: String,
    example: 'nguyenvanA@sis.hust.edu.vn',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    example: 'department1',
  })
  @IsNotEmpty()
  password: string;
}
