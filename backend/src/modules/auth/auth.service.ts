import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TeacherService } from '../teacher/teacher.service';
import { LoginRequestDTO } from './dto/request/login.dto';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { Body } from '@nestjs/common/decorators';
import { RoleEnum } from '../roles/roles.enum';
import { LoginDto } from '../department/dto/login.dto';
import { DepartmentService } from '../department/department.service';
import { StudentLoginDto } from '../student/dto/login.dto';
import { StudentService } from '../student/student.service';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private teacherService: TeacherService,
    private departmentService:DepartmentService,
    private studentService:StudentService
  ) { }
  async checkAdminLogin(@Body() LoginRequestDTO: LoginRequestDTO): Promise<any> {
    if (LoginRequestDTO.email == "admin@gmail.com" && LoginRequestDTO.password == "admin") {
      const payload = { email: LoginRequestDTO.email, role: RoleEnum.admin };
      return {
        access_token: this.jwtService.sign(payload)
      }
    } else {
      return {
        status: "200",
        message: "đăng nhập thất bại"
      }
    }
  }
  
  async checkDepartmentLogin(@Body() loginDto: LoginDto): Promise<any> {
    let department = await this.departmentService.checkDepartmentLogin(loginDto);
    if(department){
      const payload ={email:department.email,role:RoleEnum.department}
      return {
        department:department,
        access_token: this.jwtService.sign(payload)
      }
    }else{
      return {
        status: "200",
        message: "đăng nhập thất bại"
      }
    }
  }
  async checkTeacherLogin(@Body() loginDto: LoginDto): Promise<any> {
    let teacher = await this.teacherService.checkTeacherLogin(loginDto);
    if(teacher){
      const payload ={email:teacher.email,role:RoleEnum.department}
      return {
        teacher:teacher,
        access_token: this.jwtService.sign(payload)
      }
    }else{
      return {
        status: "200",
        message: "đăng nhập thất bại"
      }
    }
  }

  async checkStudentLogin(@Body() loginDto: StudentLoginDto): Promise<any> {
    let s = await this.studentService.checkStudentLogin(loginDto);
    if(s){
      const payload ={email:s.email,role:RoleEnum.student}
      return {
        student:s,
        access_token: this.jwtService.sign(payload)
      }
    }else{
      return {
        status: "200",
        message: "đăng nhập thất bại"
      }
    }
  }

  async validateTeacher(email: string, password: string): Promise<any> {
    return await this.teacherService.findOne(email, password);
  }


}
