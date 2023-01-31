"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 75:
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerifyStudentService = void 0;
const common_1 = __webpack_require__(7);
const jwt_1 = __webpack_require__(24);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(11);
const student_entity_1 = __webpack_require__(10);
const verify_student_entity_1 = __webpack_require__(76);
let VerifyStudentService = class VerifyStudentService {
    constructor(student, verifyStudent, jwtService) {
        this.student = student;
        this.verifyStudent = verifyStudent;
        this.jwtService = jwtService;
    }
    async create(token, createVerifyStudentDto) {
        const payload = this.jwtService.verify(token);
        if (payload.role == 3) {
            let student = await this.student.findOne({ email: payload.email });
            if (student) {
                let c = new verify_student_entity_1.VerifyStudent();
                c.student = student;
                c.identityImage = createVerifyStudentDto.identityImage;
                c.studentIdentityImage = createVerifyStudentDto.studentIdentityImage;
                c.birthCertificateImage = createVerifyStudentDto.birthCertificateImage;
                return new this.verifyStudent(c).save();
            }
        }
    }
    async verifyValidStudent(update) {
        let c = await this.verifyStudent.findOneAndUpdate({ _id: update.verifyStudentId }, { check: true }, { new: true });
        if (c) {
            return c;
        }
        else
            return null;
    }
    async findAll() {
        return await this.verifyStudent.find({ check: false });
    }
    findOne(id) {
        return `This action returns a #${id} verifyStudent`;
    }
};
VerifyStudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(student_entity_1.Student.name)),
    __param(1, (0, mongoose_1.InjectModel)(verify_student_entity_1.VerifyStudent.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], VerifyStudentService);
exports.VerifyStudentService = VerifyStudentService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eb64b3295ee4c833aa88")
/******/ })();
/******/ 
/******/ }
;