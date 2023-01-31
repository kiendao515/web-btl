import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Delete,
  Param,
  Patch
} from '@nestjs/common';

import { Roles } from '../roles/roles.decorator';
import { StudentService } from './student.service';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@ApiTags('Student')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('/create')
  create(@Body() student: CreateStudentDto) {
    return this.studentService.create(student);
  }


  @ApiBearerAuth()
  @Roles(RoleEnum.admin,RoleEnum.teacher,RoleEnum.department)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/all')
  findAll(){
    return this.studentService.getAllStudents();
  }  

  @ApiBearerAuth()
  @Get('/profile')
  async getProfile(@Request() req) {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
      return {
        error: 403,
        message:'token required'
      }
    }else{
      return await this.studentService.getStudentInfo(token);
    }
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
      let rs=  await this.studentService.remove(id);
      console.log(rs);
      return {
          status:"deleted",
          data:rs
      }
      
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSectorDto: UpdateStudentDto) {
      let rs=  await this.studentService.update(id,updateSectorDto);
      console.log(rs);
      return {
          data:rs
      }; 
  }
}
