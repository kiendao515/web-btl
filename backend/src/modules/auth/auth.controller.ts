import { Controller, Post, UseGuards, Get, HttpCode, HttpStatus, Body, Request, HttpException } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../department/dto/login.dto';
import { StudentLoginDto } from '../student/dto/login.dto';
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
    async adminLogin(@Body() LoginRequestDTO: LoginRequestDTO) {
      let rs= await this.authService.checkAdminLogin(LoginRequestDTO);
      console.log(rs);
      return rs;
    }
  
    @Post('teacher/login')
    @HttpCode(HttpStatus.OK)
    async teacherLogin(@Body() LoginDto:LoginDto) {
        return this.authService.checkTeacherLogin(LoginDto);
    }

    @Post('department/login')
    @HttpCode(HttpStatus.OK)
    public departmentLogin(@Body() LoginDto:LoginDto){
      return this.authService.checkDepartmentLogin(LoginDto);
    }

    @Post('student/login')
    @HttpCode(HttpStatus.OK)
    public studentLogin(@Body() LoginDto:StudentLoginDto){
      return this.authService.checkStudentLogin(LoginDto);
    }

    @ApiBearerAuth()
    @Get('/profile')
    async getProfile(@Request() req) {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
       throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      return await this.authService.getProfileInfo(token);
    }
    }
}
