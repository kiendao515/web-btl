import { LoginDto } from '../department/dto/login.dto';
import { AuthService } from './auth.service';
import { LoginRequestDTO } from './dto/request/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    adminLogin(LoginRequestDTO: LoginRequestDTO): Promise<any>;
    teacherLogin(): void;
    departmentLogin(LoginDto: LoginDto): Promise<any>;
}
