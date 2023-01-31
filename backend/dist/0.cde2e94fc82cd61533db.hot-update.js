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
const student_controller_1 = __webpack_require__(17);
const student_service_1 = __webpack_require__(19);
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        controllers: [student_controller_1.StudentController],
        providers: [student_service_1.StudentService]
    })
], StudentModule);
exports.StudentModule = StudentModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f366457a10f95472cda7")
/******/ })();
/******/ 
/******/ }
;