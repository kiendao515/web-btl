"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 34:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeacherModule = void 0;
const common_1 = __webpack_require__(7);
const teacher_service_1 = __webpack_require__(35);
const teacher_controller_1 = __webpack_require__(37);
const mongoose_1 = __webpack_require__(8);
const teacher_entity_1 = __webpack_require__(33);
let TeacherModule = class TeacherModule {
};
TeacherModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: teacher_entity_1.Teacher.name, schema: teacher_entity_1.TeacherSchema }])
        ],
        controllers: [teacher_controller_1.TeacherController],
        providers: [teacher_service_1.TeacherService]
    })
], TeacherModule);
exports.TeacherModule = TeacherModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("721242d33f106d30381b")
/******/ })();
/******/ 
/******/ }
;