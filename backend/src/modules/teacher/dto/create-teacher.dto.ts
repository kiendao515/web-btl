import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTeacherDto {
    @ApiProperty({
        type: String,
        example: 'daotrungkien515@gmail.com',
      })
      @IsNotEmpty()
      email: string;
    
      @ApiProperty({
        type: String,
        example: 'abcdef',
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
        example: 'ABC2000',
      })
      @IsNotEmpty()
      teacherID: string;

      @ApiProperty({
        type: String,
        example: '002102826251',
      })
      @IsNotEmpty()
      identification: string;

      @ApiProperty({
        type: String,
        example: 'https://vtvgo-image.vtvdigital.vn/images/20221218/3d15eb3c-38f3-471f-93ce-d6e934e2876f.jpg',
      })
      @IsNotEmpty()
      userImage: string;
    
}
