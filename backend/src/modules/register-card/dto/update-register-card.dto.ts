import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateRegisterCardDto } from './create-register-card.dto';

export class UpdateRegisterCardDto{
    @ApiProperty({type: String,required:true,example:'63cabdee7bc8183573039f3b'})
    registerCardId : string;

    @ApiProperty({type: String,required:true,example:"false"})
    status:string
}
