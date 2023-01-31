"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 79:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateVerifyStudentDto = void 0;
const swagger_1 = __webpack_require__(5);
class UpdateVerifyStudentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true, example: '63cabdee7bc8183573039f3b' }),
    __metadata("design:type", String)
], UpdateVerifyStudentDto.prototype, "verifyStudentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true, example: "false" }),
    __metadata("design:type", Object)
], UpdateVerifyStudentDto.prototype, "", void 0);
exports.UpdateVerifyStudentDto = UpdateVerifyStudentDto;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d9cd330636a619281365")
/******/ })();
/******/ 
/******/ }
;