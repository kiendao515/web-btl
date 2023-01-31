"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 68:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancelCreditModule = void 0;
const common_1 = __webpack_require__(7);
const cancel_credit_service_1 = __webpack_require__(69);
const cancel_credit_controller_1 = __webpack_require__(71);
const mongoose_1 = __webpack_require__(8);
const cancel_credit_entity_1 = __webpack_require__(70);
const student_entity_1 = __webpack_require__(10);
const registration_entity_1 = __webpack_require__(59);
const jwt_1 = __webpack_require__(24);
const jwt_strategy_1 = __webpack_require__(41);
const student_service_1 = __webpack_require__(15);
const registration_service_1 = __webpack_require__(58);
let CancelCreditModule = class CancelCreditModule {
};
CancelCreditModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: cancel_credit_entity_1.CancelCredit.name, schema: cancel_credit_entity_1.CancelCreditSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: student_entity_1.Student.name, schema: student_entity_1.StudentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: registration_entity_1.Registration.name, schema: registration_entity_1.RegistrationSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
            jwt_1.JwtModule.register({
                secret: "kiendao2001",
                signOptions: { expiresIn: '10h' },
            }),
        ],
        controllers: [cancel_credit_controller_1.CancelCreditController],
        providers: [cancel_credit_service_1.CancelCreditService, jwt_strategy_1.JwtStrategy, student_service_1.StudentService, registration_service_1.RegistrationService]
    })
], CancelCreditModule);
exports.CancelCreditModule = CancelCreditModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("470547596e9f44637ad8")
/******/ })();
/******/ 
/******/ }
;