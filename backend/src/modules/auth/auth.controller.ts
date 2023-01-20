import {
  Controller,
  Post,
  UseGuards,
  Get,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../department/dto/login.dto';
import { AuthService } from './auth.service';
import { LoginRequestDTO } from './dto/request/login.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('admin/login')
  @HttpCode(HttpStatus.OK)
  public adminLogin(@Body() LoginRequestDTO: LoginRequestDTO) {
    return this.authService.checkAdminLogin(LoginRequestDTO);
  }

  @Post('teacher/login')
  @HttpCode(HttpStatus.OK)
  public teacherLogin(@Body() LoginDto: LoginDto) {
    return this.authService.checkTeacherLogin(LoginDto);
  }

  @Post('department/login')
  @HttpCode(HttpStatus.OK)
  public departmentLogin(@Body() LoginDto: LoginDto) {
    return this.authService.checkDepartmentLogin(LoginDto);
  }
}
