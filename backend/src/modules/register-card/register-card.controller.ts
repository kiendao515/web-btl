import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { RegisterCardService } from './register-card.service';
import { CreateRegisterCardDto } from './dto/create-register-card.dto';
import { UpdateRegisterCardDto } from './dto/update-register-card.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';
@ApiTags('Register-teacher-card')
@Controller('register-card')
export class RegisterCardController {
  constructor(private readonly registerCardService: RegisterCardService) {}

  @ApiBearerAuth()
  @Post('/create')
  async create(@Request() req,@Body() createRegisterCardDto: CreateRegisterCardDto) {
    const token = req.headers.authorization?.split(' ')[1];
    const body = req.body;
    if(!token){
      throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      let rs = await this.registerCardService.create(token,body);
      return {
        data:rs
      }
    }
  }

  @Get('/all')
  findAll() {
    return this.registerCardService.findAll();
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.department)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('/check')
  async update(@Body() updateRegisterCardDto: UpdateRegisterCardDto) {
    let c= await this.registerCardService.updateStatus(updateRegisterCardDto);
    if(c!=null){
      return {
        data:c
      };
    }
  }

  @ApiBearerAuth()
  @Get('/my-form')
  async checkMyOwnRegistration(@Request() req){
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
      throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      let rs = await this.registerCardService.teacherCheckOwnRequest(token);
      return {
        data:rs
      }
    }
  }
}
