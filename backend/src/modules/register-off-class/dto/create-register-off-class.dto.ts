import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateRegisterOffClassDto {
    @ApiProperty({
        type: String,
        example: '2023-01-10',
      })
      @IsNotEmpty()
      startDate:string ;
    
      @ApiProperty({
        type: String,
        example: '2023-01-20',
      })
      @IsNotEmpty()
      endDate: string;
    
      @ApiProperty({
        type: String,
        example: 'di cong tac',
      })
      @IsNotEmpty()
      reason: string;
}
