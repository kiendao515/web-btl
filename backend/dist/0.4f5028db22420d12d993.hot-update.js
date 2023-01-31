"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 46:
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
exports.SubjectSchema = exports.Subject = void 0;
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(14);
const sector_entity_1 = __webpack_require__(41);
let Subject = class Subject {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Subject.prototype, "courseName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Subject.prototype, "courseId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof Number !== "undefined" && Number) === "function" ? _a : Object)
], Subject.prototype, "numberOfCredit", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Sector'
    }),
    __metadata("design:type", typeof (_b = typeof sector_entity_1.Sector !== "undefined" && sector_entity_1.Sector) === "function" ? _b : Object)
], Subject.prototype, "sector", void 0);
Subject = __decorate([
    (0, mongoose_1.Schema)()
], Subject);
exports.Subject = Subject;
exports.SubjectSchema = mongoose_1.SchemaFactory.createForClass(Subject);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("86ee42df839e0b43a6b2")
/******/ })();
/******/ 
/******/ }
;