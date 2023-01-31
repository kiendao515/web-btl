import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { VerifyStudentService } from './verify-student.service';
import { CreateVerifyStudentDto } from './dto/create-verify-student.dto';
import { UpdateVerifyStudentDto } from './dto/update-verify-student.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';

@ApiTags('Verify-Student')
@Controller('verify-student')
export class VerifyStudentController {
  constructor(private readonly verifyStudentService: VerifyStudentService) {}

  @ApiBearerAuth()
  @Post()
  async create(@Request() req,@Body() createVerifyStudentDto: CreateVerifyStudentDto) {
    const token = req.headers.authorization?.split(' ')[1];
    const body = req.body;
    if(!token){
      throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      return await this.verifyStudentService.create(token,body);
    }
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.department)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('/check')
  async verifyStudent(@Body() update :UpdateVerifyStudentDto){
    let c= await this.verifyStudentService.verifyValidStudent(update);
    if(c!=null){
      return {
        data:c
      };
    }
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.department)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get()
  findAll() {
    return this.verifyStudentService.findAll();
  }

  @ApiBearerAuth()
  @Get('/my-form')
  async findOne(@Request() req) {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
       throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      let rs= await this.verifyStudentService.checkMyRequest(token);
      return {
        data:rs
      }
    }
  }

}
