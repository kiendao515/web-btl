"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 57:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationModule = void 0;
const common_1 = __webpack_require__(7);
const registration_service_1 = __webpack_require__(58);
const registration_controller_1 = __webpack_require__(60);
const mongoose_1 = __webpack_require__(8);
const registration_entity_1 = __webpack_require__(59);
const jwt_strategy_1 = __webpack_require__(41);
const student_module_1 = __webpack_require__(9);
let RegistrationModule = class RegistrationModule {
};
RegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: registration_entity_1.Registration.name, schema: registration_entity_1.RegistrationSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: registration_entity_1.Registration.name, schema: registration_entity_1.RegistrationSchema }])
        ],
        controllers: [registration_controller_1.RegistrationController],
        providers: [registration_service_1.RegistrationService, jwt_strategy_1.JwtStrategy, student_module_1.StudentModule]
    })
], RegistrationModule);
exports.RegistrationModule = RegistrationModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5f0a3fe49002d5e1b7cc")
/******/ })();
/******/ 
/******/ }
;