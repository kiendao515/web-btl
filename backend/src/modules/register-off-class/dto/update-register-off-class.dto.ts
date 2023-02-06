import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateRegisterOffClassDto } from './create-register-off-class.dto';

export class UpdateRegisterOffClassDto {
    @ApiProperty({type: String,required:true,example:'63e080c7e4eb2baa03942c23'})
    registerOffClassId: string;

    @ApiProperty({type: String,required:true,example:"false"})
    status:string
}
