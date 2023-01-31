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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(7);
const jwt_1 = __webpack_require__(23);
const mongoose_1 = __webpack_require__(8);
const passport_1 = __webpack_require__(18);
const department_module_1 = __webpack_require__(24);
const department_service_1 = __webpack_require__(25);
const department_entity_1 = __webpack_require__(26);
const student_module_1 = __webpack_require__(9);
const student_service_1 = __webpack_require__(12);
const teacher_entity_1 = __webpack_require__(31);
const teacher_module_1 = __webpack_require__(32);
const teacher_service_1 = __webpack_require__(33);
const auth_controller_1 = __webpack_require__(37);
const auth_service_1 = __webpack_require__(38);
const jwt_strategy_1 = __webpack_require__(41);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: teacher_entity_1.Teacher.name, schema: teacher_entity_1.TeacherSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: department_entity_1.Department.name, schema: department_entity_1.DepartmentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
            student_module_1.StudentModule,
            teacher_module_1.TeacherModule,
            department_module_1.DepartmentModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: "kiendao2001",
                signOptions: { expiresIn: '10h' },
            }),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, teacher_service_1.TeacherService, department_service_1.DepartmentService, student_service_1.StudentService],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("764f1993afb4f118b33f")
/******/ })();
/******/ 
/******/ }
;