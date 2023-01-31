"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 65:
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
exports.AddCreditController = void 0;
const common_1 = __webpack_require__(7);
const swagger_1 = __webpack_require__(5);
const roles_decorator_1 = __webpack_require__(14);
const roles_enum_1 = __webpack_require__(19);
const add_credit_service_1 = __webpack_require__(63);
const create_add_credit_dto_1 = __webpack_require__(66);
let AddCreditController = class AddCreditController {
    constructor(addCreditService) {
        this.addCreditService = addCreditService;
    }
    async create(req, createAddCreditDto) {
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
            await this.addCreditService.create(token, body);
            return {
                data: "register success!"
            };
        }
    }
    findAll() {
        return this.addCreditService.findAll();
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof create_add_credit_dto_1.CreateAddCreditDto !== "undefined" && create_add_credit_dto_1.CreateAddCreditDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AddCreditController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.teacher),
    UseGuards(AuthGuard('jwt'), RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddCreditController.prototype, "findAll", null);
AddCreditController = __decorate([
    (0, swagger_1.ApiTags)('Register-more-credit'),
    (0, common_1.Controller)('add-credit'),
    __metadata("design:paramtypes", [typeof (_a = typeof add_credit_service_1.AddCreditService !== "undefined" && add_credit_service_1.AddCreditService) === "function" ? _a : Object])
], AddCreditController);
exports.AddCreditController = AddCreditController;


/***/ }),

/***/ 66:
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
exports.CreateAddCreditDto = void 0;
const swagger_1 = __webpack_require__(5);
const course_entity_1 = __webpack_require__(54);
const subjects_entity_1 = __webpack_require__(48);
class CreateAddCreditDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: subjects_entity_1.Subject, isArray: true, required: true, example: ['63bfd31db7fa1716a9ab5ba0', '63bfd60c9f015b2c3d39abf1'] }),
    __metadata("design:type", Array)
], CreateAddCreditDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: course_entity_1.Course, required: true, example: '63c2f036519beb6869bcee95' }),
    __metadata("design:type", typeof (_a = typeof course_entity_1.Course !== "undefined" && course_entity_1.Course) === "function" ? _a : Object)
], CreateAddCreditDto.prototype, "course", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true, example: 'vi em can dang ky de ra truong som' }),
    __metadata("design:type", String)
], CreateAddCreditDto.prototype, "reason", void 0);
exports.CreateAddCreditDto = CreateAddCreditDto;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("66472779b8a08059891a")
/******/ })();
/******/ 
/******/ }
;