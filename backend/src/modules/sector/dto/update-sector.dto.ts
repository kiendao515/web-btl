import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateSectorDto {
    @ApiProperty({
        type: String,
        example: 'Viện công nghệ thông tin và truyền thông edit'
      })
      @IsNotEmpty()
      sectorName: string;
}