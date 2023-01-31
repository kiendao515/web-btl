"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 32:
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
exports.TeacherController = void 0;
const common_1 = __webpack_require__(7);
const teacher_service_1 = __webpack_require__(31);
const create_teacher_dto_1 = __webpack_require__(33);
const swagger_1 = __webpack_require__(5);
const roles_decorator_1 = __webpack_require__(11);
const roles_enum_1 = __webpack_require__(15);
const passport_1 = __webpack_require__(16);
const roles_guard_1 = __webpack_require__(17);
let TeacherController = class TeacherController {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    createTeacher(createTeacherDto) {
        return this.teacherService.create(createTeacherDto);
    }
    findAll() {
        return this.teacherService.findAll();
    }
    registerOffClass() {
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_teacher_dto_1.CreateTeacherDto !== "undefined" && create_teacher_dto_1.CreateTeacherDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "createTeacher", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.teacher),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Get)('profile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "registerOffClass", null);
TeacherController = __decorate([
    (0, swagger_1.ApiTags)('Teacher'),
    (0, common_1.Controller)('teacher'),
    __metadata("design:paramtypes", [typeof (_a = typeof teacher_service_1.TeacherService !== "undefined" && teacher_service_1.TeacherService) === "function" ? _a : Object])
], TeacherController);
exports.TeacherController = TeacherController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd450d86812551688a48")
/******/ })();
/******/ 
/******/ }
;