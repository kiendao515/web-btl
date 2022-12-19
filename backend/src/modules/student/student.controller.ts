import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { Roles } from '../roles/roles.decorator';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post()
  create(@Body() student: Student) {
    return this.studentService.createStudent(student);
  }
  @Get()
  findAll(){
    return this.studentService.getAllStudent();
  }
}
