"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const teacher_service_1 = require("../teacher/teacher.service");
const login_dto_1 = require("./dto/request/login.dto");
const decorators_1 = require("@nestjs/common/decorators");
const roles_enum_1 = require("../roles/roles.enum");
const login_dto_2 = require("../department/dto/login.dto");
const department_service_1 = require("../department/department.service");
let AuthService = class AuthService {
    constructor(jwtService, teacherService, departmentService) {
        this.jwtService = jwtService;
        this.teacherService = teacherService;
        this.departmentService = departmentService;
    }
    async checkAdminLogin(LoginRequestDTO) {
        if (LoginRequestDTO.email == "admin@gmail.com" && LoginRequestDTO.password == "admin") {
            const payload = { email: LoginRequestDTO.email, role: roles_enum_1.RoleEnum.admin };
            return {
                access_token: this.jwtService.sign(payload)
            };
        }
        else {
            return {
                status: "200",
                message: "đăng nhập thất bại"
            };
        }
    }
    async checkDepartmentLogin(loginDto) {
        let department = await this.departmentService.checkDepartmentLogin(loginDto);
        if (department) {
            const payload = { email: department.email, role: roles_enum_1.RoleEnum.department };
            return {
                department: department,
                access_token: this.jwtService.sign(payload)
            };
        }
        else {
            return {
                status: "200",
                message: "đăng nhập thất bại"
            };
        }
    }
    async validateTeacher(email, password) {
        return await this.teacherService.findOne(email, password);
    }
};
__decorate([
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginRequestDTO]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "checkAdminLogin", null);
__decorate([
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_2.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "checkDepartmentLogin", null);
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        teacher_service_1.TeacherService,
        department_service_1.DepartmentService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map