"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

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
        return this.registrationService.findAll();
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
            console.log(body);
            return this.registrationService.registerCourse(token, body);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegistrationController.prototype, "findAll", null);
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
/******/ 	__webpack_require__.h = () => ("2ef595c167c022c42a44")
/******/ })();
/******/ 
/******/ }
;