"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 49:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectsService = void 0;
const common_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(14);
const subjects_entity_1 = __webpack_require__(46);
let SubjectsService = class SubjectsService {
    constructor(subject) {
        this.subject = subject;
    }
    async create(createSectorDto) {
        try {
            const subject = new subjects_entity_1.Subject();
            subject.courseId = createSectorDto.courseId;
            subject.courseName = createSectorDto.courseName;
            subject.numberOfCredit = createSectorDto.numberOfCredit;
            subject.sector = createSectorDto.sector;
            return new this.subject(subject).save();
        }
        catch (error) {
            throw new Error(`Error create sector ${error}`);
        }
    }
    async getAllSubjects() {
        return this.subject.find({}).populate('');
    }
};
SubjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(subjects_entity_1.Subject.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], SubjectsService);
exports.SubjectsService = SubjectsService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("24a139259970d036ead0")
/******/ })();
/******/ 
/******/ }
;