import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateVerifyStudentDto } from './create-verify-student.dto';

export class UpdateVerifyStudentDto {
    @ApiProperty({type: String,required:true,example:'63cabdee7bc8183573039f3b'})
    verifyStudentId : string;
}
