"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 9:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentModule = void 0;
const common_1 = __webpack_require__(7);
const jwt_1 = __webpack_require__(10);
const mongoose_1 = __webpack_require__(8);
const jwt_strategy_1 = __webpack_require__(41);
const student_entity_1 = __webpack_require__(11);
const student_controller_1 = __webpack_require__(14);
const student_service_1 = __webpack_require__(16);
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: student_entity_1.Student.name, schema: student_entity_1.StudentSchema }]),
            jwt_1.JwtModule.register({
                secret: "kiendao2001",
                signOptions: { expiresIn: '10h' },
            }),
        ],
        controllers: [student_controller_1.StudentController],
        providers: [student_service_1.StudentService, jwt_strategy_1.JwtStrategy]
    })
], StudentModule);
exports.StudentModule = StudentModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0201711ca25f6f13d653")
/******/ })();
/******/ 
/******/ }
;