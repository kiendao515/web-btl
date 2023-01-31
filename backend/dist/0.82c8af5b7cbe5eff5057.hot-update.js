"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 56:
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
exports.CreateCourseDto = void 0;
const swagger_1 = __webpack_require__(5);
const class_validator_1 = __webpack_require__(18);
const mongoose_1 = __webpack_require__(11);
class CreateCourseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '20222',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "semester", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '2022-12-31',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '2023-01-20',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof mongoose_1.Date !== "undefined" && mongoose_1.Date) === "function" ? _a : Object)
], CreateCourseDto.prototype, "closeDate", void 0);
exports.CreateCourseDto = CreateCourseDto;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93a29f2e84af32bcb4a6")
/******/ })();
/******/ 
/******/ }
;