import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class StudentLoginDto{
    @ApiProperty({
        type: String,
        example: 'kien.dt194306@sis.hust.edu.vn',
      })
      @IsNotEmpty()
      email: string;
    
      @ApiProperty({
        type: String,
        example: 'student1',
      })
      @IsNotEmpty()
      password: string;
}

