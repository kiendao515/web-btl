import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Date } from "mongoose";

export class CreateCourseDto {
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
        example: '2023-01-20',
      })
      @IsNotEmpty()
      closeDate: string;


}
