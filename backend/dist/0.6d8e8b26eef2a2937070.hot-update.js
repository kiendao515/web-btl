"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 27:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartmentModule = void 0;
const common_1 = __webpack_require__(7);
const department_service_1 = __webpack_require__(28);
const department_controller_1 = __webpack_require__(31);
const mongoose_1 = __webpack_require__(8);
const department_entity_1 = __webpack_require__(29);
let DepartmentModule = class DepartmentModule {
};
DepartmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: department_entity_1.Department.name, schema: department_entity_1.DepartmentSchema }]),
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1aXRyb25ndHVuZ0BodXN0LmVkdS52biIsInJvbGUiOjIsImlhdCI6MTY3NDQwMjQyOSwiZXhwIjoxNjc0NDM4NDI5fQ.XgZbP8 - hA2aOa36KJubDwGRmwdKoWckf7lqbX9xvtAg
        ],
        controllers: [department_controller_1.DepartmentController],
        providers: [department_service_1.DepartmentService]
    })
], DepartmentModule);
exports.DepartmentModule = DepartmentModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d931412b789ac538fac2")
/******/ })();
/******/ 
/******/ }
;