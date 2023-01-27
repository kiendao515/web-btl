import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';
import { CancelCreditService } from './cancel-credit.service';
import { CreateCancelCreditDto } from './dto/create-cancel-credit.dto';
import { UpdateCancelCreditDto } from './dto/update-cancel-credit.dto';

@ApiTags('Cancel-credit')
@Controller('cancel-credit')
export class CancelCreditController {
  constructor(private readonly cancelCreditService: CancelCreditService) {}

  @ApiBearerAuth()
  @Post()
  async create(@Request()req, @Body() createCancelCreditDto: CreateCancelCreditDto) {
    const token = req.headers.authorization?.split(' ')[1];
    const body = req.body;
    if(!token){
      return {
        error: 403,
        message:'token required'
      }
    }else{
      return await this.cancelCreditService.create(token,body);
    }
  }

  @Get()
  findAll() {
    return this.cancelCreditService.findAll();
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.teacher)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('/check')
  async verifyCancelCredit(@Body() update :UpdateCancelCreditDto){
    let c= await this.cancelCreditService.verifyCancelCredit(update);
    if(c!=null){
      return {
        status:200,
        data:c
      };
    }else return {status:200,message:'Đơn đăng ký không tồn tại'}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancelCreditService.findOne(+id);
  }
}
