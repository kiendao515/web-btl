import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

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
      return {
        error: 403,
        message:'token required'
      }
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
      return {
        error: 403,
        message:'token required'
      }
    }else{
      await this.registrationService.registerCourse(token,body);
      return {
        data:"register success!"
      }
    }
  }
}
