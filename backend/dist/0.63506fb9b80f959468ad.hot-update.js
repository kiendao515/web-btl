"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 76:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerifyStudentSchema = exports.VerifyStudent = void 0;
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(15);
const student_entity_1 = __webpack_require__(14);
let VerifyStudent = class VerifyStudent {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Student'
    }),
    __metadata("design:type", typeof (_a = typeof student_entity_1.Student !== "undefined" && student_entity_1.Student) === "function" ? _a : Object)
], VerifyStudent.prototype, "student", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], VerifyStudent.prototype, "identityImage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], VerifyStudent.prototype, "studentIdentityImage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], VerifyStudent.prototype, "birthCertificateImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true
    }),
    __metadata("design:type", typeof (_b = typeof String !== "undefined" && String) === "function" ? _b : Object)
], VerifyStudent.prototype, "check", void 0);
VerifyStudent = __decorate([
    (0, mongoose_1.Schema)()
], VerifyStudent);
exports.VerifyStudent = VerifyStudent;
exports.VerifyStudentSchema = mongoose_1.SchemaFactory.createForClass(VerifyStudent);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("355ab303e2ac2fbe7f6c")
/******/ })();
/******/ 
/******/ }
;