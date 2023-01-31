import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAddCreditDto } from './create-add-credit.dto';

export class UpdateAddCreditDto{
    @ApiProperty({type: String,required:true,example:'63c7f654fd35ae402c23838a'})
    addCreditId : string;

    @ApiProperty({type: String,required:true,example:"false"})
    status:string;
}
