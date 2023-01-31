"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 6:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(8);
const student_module_1 = __webpack_require__(9);
const auth_module_1 = __webpack_require__(18);
const teacher_module_1 = __webpack_require__(30);
const department_module_1 = __webpack_require__(20);
const subjects_module_1 = __webpack_require__(40);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://kiendao:kiendao2001@cluster0.bnqgz.mongodb.net/web-back?retryWrites=true&w=majority'),
            student_module_1.StudentModule,
            teacher_module_1.TeacherModule,
            auth_module_1.AuthModule,
            department_module_1.DepartmentModule,
            subjects_module_1.SubjectsModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 40:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectsModule = void 0;
const common_1 = __webpack_require__(7);
let SubjectsModule = class SubjectsModule {
};
SubjectsModule = __decorate([
    (0, common_1.Module)({})
], SubjectsModule);
exports.SubjectsModule = SubjectsModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37fbb6bce120f6821da9")
/******/ })();
/******/ 
/******/ }
;