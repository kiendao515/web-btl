"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 54:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourseSchema = exports.Course = void 0;
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(11);
let Course = class Course {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Course.prototype, "semester", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Course.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Date !== "undefined" && mongoose_2.Date) === "function" ? _a : Object)
], Course.prototype, "closeDate", void 0);
Course = __decorate([
    (0, mongoose_1.Schema)()
], Course);
exports.Course = Course;
exports.CourseSchema = mongoose_1.SchemaFactory.createForClass(Course);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("66baf99ac1d40ee55668")
/******/ })();
/******/ 
/******/ }
;