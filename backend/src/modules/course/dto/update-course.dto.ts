import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto  {
    @ApiProperty({
        type: String,
        example: '20222',
      })
      @IsNotEmpty()
      semester: string;
    
      @ApiProperty({
        type: String,
        example: '2022-12-31',
      })
      @IsNotEmpty()
      startDate: string;

      @ApiProperty({
        type: String,
        example: '2023-01-31',
      })
      @IsNotEmpty()
      closeDate: string;
}
