"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 61:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRegistrationDto = void 0;
const swagger_1 = __webpack_require__(5);
const course_entity_1 = __webpack_require__(54);
const subjects_entity_1 = __webpack_require__(48);
class CreateRegistrationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: subjects_entity_1.Subject, isArray: true, required: true, example: ['63bfd31db7fa1716a9ab5ba0', '63bfd60c9f015b2c3d39abf1'] }),
    __metadata("design:type", Array)
], CreateRegistrationDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: course_entity_1.Course, required: true, example: '63c2f036519beb6869bcee95' }),
    __metadata("design:type", typeof (_a = typeof course_entity_1.Course !== "undefined" && course_entity_1.Course) === "function" ? _a : Object)
], CreateRegistrationDto.prototype, "course", void 0);
exports.CreateRegistrationDto = CreateRegistrationDto;


/***/ }),

/***/ 60:
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
exports.RegistrationController = void 0;
const common_1 = __webpack_require__(7);
const registration_service_1 = __webpack_require__(58);
const create_registration_dto_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(5);
let RegistrationController = class RegistrationController {
    constructor(registrationService) {
        this.registrationService = registrationService;
    }
    findAll() {
        return this.registrationService.getStudentCourses();
    }
    getStudentCourse(req) {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return {
                error: 403,
                message: 'token required'
            };
        }
        else {
            return this.registrationService.getCurrentStudentCourse(token);
        }
    }
    registerCourse(req, registration) {
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
            let data = this.registrationService.registerCourse(token, body);
            return {
                data: data
            };
        }
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegistrationController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/student/single'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RegistrationController.prototype, "getStudentCourse", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof create_registration_dto_1.CreateRegistrationDto !== "undefined" && create_registration_dto_1.CreateRegistrationDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], RegistrationController.prototype, "registerCourse", null);
RegistrationController = __decorate([
    (0, swagger_1.ApiTags)('Registration'),
    (0, common_1.Controller)('registration'),
    __metadata("design:paramtypes", [typeof (_a = typeof registration_service_1.RegistrationService !== "undefined" && registration_service_1.RegistrationService) === "function" ? _a : Object])
], RegistrationController);
exports.RegistrationController = RegistrationController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b1e0d30b3de2a1a851a4")
/******/ })();
/******/ 
/******/ }
;