import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginRequestDTO {
  @ApiProperty({
    type: String,
    example: 'admin@gmail.com',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    example: 'admin',
  })
  @IsNotEmpty()
  password: string;
}
