import { Body, Controller, Get, Post } from '@nestjs/common';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() student: Student) {
    return this.studentService.createStudent(student);
  }
  @Get()
  findAll(){
    return this.studentService.getAllStudent();
  }
}
