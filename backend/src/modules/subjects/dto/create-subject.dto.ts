import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
class Sector {
  @ApiProperty({
    type: String,
    example: 'Viện công nghệ thông tin và truyền thông',
  })
  @IsNotEmpty()
  sectorName: string;
}

export class CreateSubjectDto {
    @ApiProperty({
        type: String,
        example: 'Nhap mon khai pha du lieu',
      })
      @IsNotEmpty()
      courseName: string;
    
      @ApiProperty({
        type: String,
        example: 'IT4000',
      })
      @IsNotEmpty()
      courseId: string;
    
      @ApiProperty({
        type: Number,
        example: 4,
      })
      @IsNotEmpty()
      numberOfCredit: number;
    
      @ApiProperty({
        type: Sector,
        example: '63bf77b1a634604968a61474',
      })
      @IsNotEmpty()
      sector: Sector;
    
}
