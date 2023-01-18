import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';
import { AddCreditService } from './add-credit.service';
import { CreateAddCreditDto } from './dto/create-add-credit.dto';
import { UpdateAddCreditDto } from './dto/update-add-credit.dto';

@ApiTags('Register-more-credit')
@Controller('add-credit')
export class AddCreditController {
  constructor(private readonly addCreditService: AddCreditService) {}

  @ApiBearerAuth()
  @Post()
  async create(@Request()req, @Body() createAddCreditDto: CreateAddCreditDto) {
    const token = req.headers.authorization?.split(' ')[1];
    const body = req.body;
    if(!token){
      return {
        error: 403,
        message:'token required'
      }
    }else{
      return await this.addCreditService.create(token,body);
    }
  }


  @ApiBearerAuth()
  @Roles(RoleEnum.teacher)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/all')
  findAll() {
    return this.addCreditService.findAll();
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.teacher)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('/check')
  async acceptRegisterMoreCredit(@Body() update :UpdateAddCreditDto){
    let c= await this.addCreditService.acceptRegisterMoreCredit(update);
    if(c!=null){
      return {
        status:200,
        data:c
      };
    }else return {status:200,message:'Đơn đăng ký không tồn tại'}
  }
}
