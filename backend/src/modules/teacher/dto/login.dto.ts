import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto{
    @ApiProperty({
        type: String,
        example: 'buitrongtung@hust.edu.vn',
      })
      @IsNotEmpty()
      email: string;
    
      @ApiProperty({
        type: String,
        example: 'teacher1',
      })
      @IsNotEmpty()
      password: string;
}

