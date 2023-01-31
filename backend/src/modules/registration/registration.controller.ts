import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@ApiTags('Registration')
@Controller('registration')
export class RegistrationController {
  constructor(
    private readonly registrationService: RegistrationService
  ) {}

  @Get('/all')
  findAll() {
    return this.registrationService.getStudentCourses();
  }

  @ApiBearerAuth()
  @Get('/student/single')
  getStudentCourse(@Request() req){
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
      throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      return this.registrationService.getCurrentStudentCourse(token);
    }
  }

  @ApiBearerAuth()
  @Post('/register')
  async registerCourse(@Request() req,@Body() registration:CreateRegistrationDto){
    const token = req.headers.authorization?.split(' ')[1];
    const body = req.body;
    if(!token){
      throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      let rs= await this.registrationService.registerCourse(token,body);
      console.log(rs);
      return {
        data:rs
      }
    }
  }
}
