import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateVerifyStudentDto {
    @ApiProperty({
        type: String,
        example: 'https://static.euronews.com/articles/stories/06/35/53/24/773x435_cmsv2_548e11b5-0a57-53f4-88d9-5ea703413300-6355324.jpg',
      })
      @IsNotEmpty()
      identityImage: string;
    
      @ApiProperty({
        type: String,
        example: 'https://www.shutterstock.com/image-vector/student-id-card-university-school-600w-1421032442.jpg',
      })
      @IsNotEmpty()
      studentIdentityImage: string;
    
      @ApiProperty({
        type: String,
        example: 'https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO-giaykhaisinh.jpg',
      })
      @IsNotEmpty()
      birthCertificateImage: string;
}
