"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 40:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(7);
const jwt_1 = __webpack_require__(10);
const teacher_service_1 = __webpack_require__(35);
const login_dto_1 = __webpack_require__(41);
const decorators_1 = __webpack_require__(42);
const roles_enum_1 = __webpack_require__(23);
const login_dto_2 = __webpack_require__(30);
const department_service_1 = __webpack_require__(28);
const login_dto_3 = __webpack_require__(21);
const student_service_1 = __webpack_require__(19);
let AuthService = class AuthService {
    constructor(jwtService, teacherService, departmentService, studentService) {
        this.jwtService = jwtService;
        this.teacherService = teacherService;
        this.departmentService = departmentService;
        this.studentService = studentService;
    }
    async checkAdminLogin(LoginRequestDTO) {
        if (LoginRequestDTO.email == "admin@gmail.com" && LoginRequestDTO.password == "admin") {
            const payload = { email: LoginRequestDTO.email, role: roles_enum_1.RoleEnum.admin };
            return {
                access_token: this.jwtService.sign(payload)
            };
        }
        else {
            throw new common_1.HttpException({ message: 'Can not login' }, common_1.HttpStatus.UNAUTHORIZED);
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
            throw new common_1.HttpException({ message: 'Can not login' }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async checkTeacherLogin(loginDto) {
        let teacher = await this.teacherService.checkTeacherLogin(loginDto);
        if (teacher) {
            const payload = { email: teacher.email, role: roles_enum_1.RoleEnum.teacher };
            return {
                teacher: teacher,
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
    async checkStudentLogin(loginDto) {
        let s = await this.studentService.checkStudentLogin(loginDto);
        if (s) {
            const payload = { email: s.email, role: roles_enum_1.RoleEnum.student };
            return {
                student: s,
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
    async getProfileInfo(token) {
        const payload = this.jwtService.verify(token);
        if (payload.role == 1) {
            return {
                name: 'admin',
                email: 'admin@gmail.com',
                age: '21',
                from: 'hà nội việt nam',
                role: 'admin'
            };
        }
        else if (payload.role == 2) {
            return await this.teacherService.getTeacherInfo(token);
        }
        else if (payload.role == 3) {
            return await this.studentService.getStudentInfo(token);
        }
        else
            return await this.departmentService.getDepartmentInfo(token);
    }
};
__decorate([
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof login_dto_1.LoginRequestDTO !== "undefined" && login_dto_1.LoginRequestDTO) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthService.prototype, "checkAdminLogin", null);
__decorate([
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof login_dto_2.LoginDto !== "undefined" && login_dto_2.LoginDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], AuthService.prototype, "checkDepartmentLogin", null);
__decorate([
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof login_dto_2.LoginDto !== "undefined" && login_dto_2.LoginDto) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], AuthService.prototype, "checkTeacherLogin", null);
__decorate([
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof login_dto_3.StudentLoginDto !== "undefined" && login_dto_3.StudentLoginDto) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], AuthService.prototype, "checkStudentLogin", null);
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof teacher_service_1.TeacherService !== "undefined" && teacher_service_1.TeacherService) === "function" ? _b : Object, typeof (_c = typeof department_service_1.DepartmentService !== "undefined" && department_service_1.DepartmentService) === "function" ? _c : Object, typeof (_d = typeof student_service_1.StudentService !== "undefined" && student_service_1.StudentService) === "function" ? _d : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("efa80416c8b52eaf5d55")
/******/ })();
/******/ 
/******/ }
;