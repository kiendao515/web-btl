import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
class Sector{
    @ApiProperty({
      type: String,
      example: 'Viện công nghệ thông tin và truyền thông'
    })
    @IsNotEmpty()
    sectorName: string;
  }
export class CreateStudentDto {
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

    @ApiProperty({
        type: String,
        example: 'kiên',
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        example: '20194306',
    })
    @IsNotEmpty()
    studentCode: string;

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

    @ApiProperty({
        type: Number,
        example:22
    })
    @IsNotEmpty()
    age: Number;

    @ApiProperty({
        type: Sector,
        example: '63bf77b1a634604968a61474',
      })
    @IsNotEmpty()
    sector: Sector;

    @ApiProperty({
        type: Number,
        example: 0,
      })
    @IsNotEmpty()
    totalOfCredit: Number;

}

