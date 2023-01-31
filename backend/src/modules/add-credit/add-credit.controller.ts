import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
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
      throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      let rs =await this.addCreditService.create(token,body);
      return {
        data:rs
      }
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
    return {
      data:c
    }
  }

  @ApiBearerAuth()
  @Get('/own')
  async getOwnAddCredit(@Request() req):Promise<any>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
      throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      let rs= await this.addCreditService.getOwnAddCredit(token);
      return {
        data:rs
      }
    }
  }
}
