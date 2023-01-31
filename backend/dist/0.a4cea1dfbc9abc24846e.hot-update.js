"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 50:
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
exports.CreateSubjectDto = void 0;
const swagger_1 = __webpack_require__(5);
const class_validator_1 = __webpack_require__(18);
class Sector {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Viện công nghệ thông tin và truyền thông'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Sector.prototype, "sectorName", void 0);
class CreateSubjectDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Nhap mon khai pha du lieu',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSubjectDto.prototype, "courseName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'IT4000',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSubjectDto.prototype, "courseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: number,
        example: 4,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof Number !== "undefined" && Number) === "function" ? _a : Object)
], CreateSubjectDto.prototype, "numberOfCredit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Sector,
        example: '63bf77b1a634604968a61474',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Sector)
], CreateSubjectDto.prototype, "sector", void 0);
exports.CreateSubjectDto = CreateSubjectDto;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("651e22b553dd000ff42a")
/******/ })();
/******/ 
/******/ }
;