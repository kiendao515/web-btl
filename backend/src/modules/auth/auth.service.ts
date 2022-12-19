import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Teacher } from '../teacher/entities/teacher.entity';
import { TeacherService } from '../Teacher/teacher.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { LoginRequestDTO } from './dto/request/login.dto';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { Body } from '@nestjs/common/decorators';
import { RoleEnum } from '../roles/roles.enum';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private teacherService: TeacherService,
  ) {}
  async checkAdminLogin(@Body() LoginRequestDTO: LoginRequestDTO): Promise<any>{
    if(LoginRequestDTO.email=="admin@gmail.com" && LoginRequestDTO.password=="admin"){
      const payload = { email: LoginRequestDTO.email, role:RoleEnum.admin};
      return {
        access_token: this.jwtService.sign(payload)
      }
    }else {
      return {
        status:"200",
        message:"đăng nhập thất bại"
      }
    }
  }
  async validateTeacher(email: string, password: string): Promise<any> {
    return await this.teacherService.findOne(email,password);
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };

  }


}
