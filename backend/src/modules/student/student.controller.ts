import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards
} from '@nestjs/common';

import { Roles } from '../roles/roles.decorator';
import { StudentService } from './student.service';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

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
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/all')
  findAll(){
    return this.studentService.getAllStudents();
  }  
}
