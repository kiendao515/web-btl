"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 45:
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
const mongoose_1 = __webpack_require__(8);
const subjects_entity_1 = __webpack_require__(48);
const subjects_controller_1 = __webpack_require__(46);
const subjects_service_1 = __webpack_require__(47);
let SubjectsModule = class SubjectsModule {
};
SubjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: subjects_entity_1.Subject.name, schema: subjects_entity_1.SubjectSchema }])
        ],
        controllers: [subjects_controller_1.SubjectsController],
        providers: [subjects_service_1.SubjectsService]
    })
], SubjectsModule);
exports.SubjectsModule = SubjectsModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e02e07cc2576f9a3cfa5")
/******/ })();
/******/ 
/******/ }
;