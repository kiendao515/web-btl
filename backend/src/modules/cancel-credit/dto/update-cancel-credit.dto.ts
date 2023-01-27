import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCancelCreditDto } from './create-cancel-credit.dto';

export class UpdateCancelCreditDto{
    @ApiProperty({type: String,required:true,example:'63ca5319701c7a1a646f7645'})
    cancelCreditId : string;
}
