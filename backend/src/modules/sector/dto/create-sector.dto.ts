import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSectorDto {
  @ApiProperty({
    type: String,
    example: 'Viện công nghệ thông tin và truyền thông',
  })
  @IsNotEmpty()
  sectorName: string;
}
