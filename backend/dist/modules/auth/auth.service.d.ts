import { JwtService } from '@nestjs/jwt';
import { TeacherService } from '../teacher/teacher.service';
import { LoginRequestDTO } from './dto/request/login.dto';
import { LoginDto } from '../department/dto/login.dto';
import { DepartmentService } from '../department/department.service';
export declare class AuthService {
    private jwtService;
    private teacherService;
    private departmentService;
    constructor(jwtService: JwtService, teacherService: TeacherService, departmentService: DepartmentService);
    checkAdminLogin(LoginRequestDTO: LoginRequestDTO): Promise<any>;
    checkDepartmentLogin(loginDto: LoginDto): Promise<any>;
    validateTeacher(email: string, password: string): Promise<any>;
}
