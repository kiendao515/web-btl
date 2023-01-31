"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 22:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateStudentDto = void 0;
const swagger_1 = __webpack_require__(5);
const class_validator_1 = __webpack_require__(18);
class Sector {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Viện công nghệ thông tin và truyền thông'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Sector.prototype, "sectorName", void 0);
class CreateStudentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'kien.dt194306@sis.hust.edu.vn',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'student1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'kiên',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '20194306',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "studentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '002102826251',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "identification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'https://vtvgo-image.vtvdigital.vn/images/20221218/3d15eb3c-38f3-471f-93ce-d6e934e2876f.jpg',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "userImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 22
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof Number !== "undefined" && Number) === "function" ? _a : Object)
], CreateStudentDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Sector,
        example: '63bf77b1a634604968a61474',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Sector)
], CreateStudentDto.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_b = typeof Number !== "undefined" && Number) === "function" ? _b : Object)
], CreateStudentDto.prototype, "totalOfCredit", void 0);
exports.CreateStudentDto = CreateStudentDto;


/***/ }),

/***/ 13:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentController = void 0;
const common_1 = __webpack_require__(7);
const roles_decorator_1 = __webpack_require__(14);
const student_service_1 = __webpack_require__(15);
const roles_enum_1 = __webpack_require__(19);
const passport_1 = __webpack_require__(20);
const roles_guard_1 = __webpack_require__(21);
const swagger_1 = __webpack_require__(5);
const create_student_dto_1 = __webpack_require__(22);
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    create(student) {
        return this.studentService.create(student);
    }
    findAll() {
        return this.studentService.getAllStudents();
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_student_dto_1.CreateStudentDto !== "undefined" && create_student_dto_1.CreateStudentDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.student),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:type", Object)
], StudentController.prototype, "", void 0);
StudentController = __decorate([
    (0, swagger_1.ApiTags)('Student'),
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [typeof (_a = typeof student_service_1.StudentService !== "undefined" && student_service_1.StudentService) === "function" ? _a : Object])
], StudentController);
exports.StudentController = StudentController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9c1b86a423c5fce16228")
/******/ })();
/******/ 
/******/ }
;