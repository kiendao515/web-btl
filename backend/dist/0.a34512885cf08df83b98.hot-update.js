"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 62:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddCreditModule = void 0;
const common_1 = __webpack_require__(7);
const add_credit_service_1 = __webpack_require__(63);
const add_credit_controller_1 = __webpack_require__(65);
const mongoose_1 = __webpack_require__(8);
const add_credit_entity_1 = __webpack_require__(64);
const student_entity_1 = __webpack_require__(10);
const jwt_1 = __webpack_require__(24);
const jwt_strategy_1 = __webpack_require__(41);
const student_service_1 = __webpack_require__(15);
const registration_entity_1 = __webpack_require__(59);
let AddCreditModule = class AddCreditModule {
};
AddCreditModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: add_credit_entity_1.AddCredit.name, schema: add_credit_entity_1.AddCreditSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: student_entity_1.Student.name, schema: student_entity_1.StudentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: registration_entity_1.Registration.name, schema: registration_entity_1.RegistrationSchema }]),
            jwt_1.JwtModule.register({
                secret: "kiendao2001",
                signOptions: { expiresIn: '10h' },
            }),
        ],
        controllers: [add_credit_controller_1.AddCreditController],
        providers: [add_credit_service_1.AddCreditService, jwt_strategy_1.JwtStrategy, student_service_1.StudentService, Registra]
    })
], AddCreditModule);
exports.AddCreditModule = AddCreditModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("74becff6833e472cc3a6")
/******/ })();
/******/ 
/******/ }
;