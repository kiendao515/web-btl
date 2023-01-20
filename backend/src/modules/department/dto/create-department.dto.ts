import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateDepartmentDto {
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

  @ApiProperty({
    type: String,
    example: 'kiên',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    example: 'DB1000',
  })
  @IsNotEmpty()
  departmentID: string;

  @ApiProperty({
    type: String,
    example: '002102826251',
  })
  @IsNotEmpty()
  identification: string;

  @ApiProperty({
    type: String,
    example:
      'https://vtvgo-image.vtvdigital.vn/images/20221218/3d15eb3c-38f3-471f-93ce-d6e934e2876f.jpg',
  })
  @IsNotEmpty()
  userImage: string;
}
