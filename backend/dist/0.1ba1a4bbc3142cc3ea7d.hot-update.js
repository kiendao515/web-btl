"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 77:
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerifyStudentController = void 0;
const common_1 = __webpack_require__(7);
const verify_student_service_1 = __webpack_require__(75);
const create_verify_student_dto_1 = __webpack_require__(78);
const update_verify_student_dto_1 = __webpack_require__(79);
const swagger_1 = __webpack_require__(5);
const roles_decorator_1 = __webpack_require__(14);
const roles_enum_1 = __webpack_require__(19);
const passport_1 = __webpack_require__(20);
const roles_guard_1 = __webpack_require__(21);
let VerifyStudentController = class VerifyStudentController {
    constructor(verifyStudentService) {
        this.verifyStudentService = verifyStudentService;
    }
    async create(req, createVerifyStudentDto) {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const body = req.body;
        if (!token) {
            return {
                error: 403,
                message: 'token required'
            };
        }
        else {
            return await this.verifyStudentService.create(token, body);
        }
    }
    async verifyStudent(update) {
        let c = await this.verifyStudentService.verifyValidStudent(update);
        if (c != null) {
            return {
                status: 200,
                data: c
            };
        }
        else
            return { status: 200, message: 'Đơn đăng ký phê duyệt sinh viên không tồn tại' };
    }
    findAll() {
        return this.verifyStudentService.findAll();
    }
    findOne(id) {
        return this.verifyStudentService.findOne(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof create_verify_student_dto_1.CreateVerifyStudentDto !== "undefined" && create_verify_student_dto_1.CreateVerifyStudentDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], VerifyStudentController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.department),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Post)('/check'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_verify_student_dto_1.UpdateVerifyStudentDto !== "undefined" && update_verify_student_dto_1.UpdateVerifyStudentDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], VerifyStudentController.prototype, "verifyStudent", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.department),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VerifyStudentController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/my-form'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VerifyStudentController.prototype, "findOne", null);
VerifyStudentController = __decorate([
    (0, swagger_1.ApiTags)('Verify-Student'),
    (0, common_1.Controller)('verify-student'),
    __metadata("design:paramtypes", [typeof (_a = typeof verify_student_service_1.VerifyStudentService !== "undefined" && verify_student_service_1.VerifyStudentService) === "function" ? _a : Object])
], VerifyStudentController);
exports.VerifyStudentController = VerifyStudentController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8dc71884098108f836c")
/******/ })();
/******/ 
/******/ }
;