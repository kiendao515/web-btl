import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TeacherService } from '../teacher/teacher.service';
import { LoginRequestDTO } from './dto/request/login.dto';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { Body } from '@nestjs/common/decorators';
import { RoleEnum } from '../roles/roles.enum';
import { LoginDto } from '../department/dto/login.dto';
import { DepartmentService } from '../department/department.service';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private teacherService: TeacherService,
    private departmentService:DepartmentService
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
  async validateTeacher(email: string, password: string): Promise<any> {
    return await this.teacherService.findOne(email, password);
  }


}
