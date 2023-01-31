"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 58:
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
exports.RegistrationService = void 0;
const common_1 = __webpack_require__(7);
const jwt_1 = __webpack_require__(24);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(11);
const student_entity_1 = __webpack_require__(10);
const registration_entity_1 = __webpack_require__(59);
let RegistrationService = class RegistrationService {
    constructor(registration, student, jwtService) {
        this.registration = registration;
        this.student = student;
        this.jwtService = jwtService;
    }
    async registerCourse(token, body) {
        const payload = this.jwtService.verify(token);
        console.log(payload);
        if (payload.role == 3) {
            let student = await this.student.findOne({ email: payload.email });
            if (student) {
                let credit = 0;
                let registration = await this.registration.findOne({ student: student._id }).populate('student').populate('course').populate('subject');
                for (var i = 0; i < registration.subject.length; i++) {
                    credit += registration.subject[i].numberOfCredit;
                }
                if (credit < 24) {
                    console.log(typeof registration.course.closeDate);
                    if (new Date(registration.course.startDate) < new Date(Date.now()) && new Date(Date.now()) < new Date(registration.course.closeDate)) {
                        let r = new registration_entity_1.Registration();
                        r.student = student;
                        r.subject = body.subject;
                        r.course = body.course;
                        return new this.registration(r).save();
                    }
                }
                else
                    return "Over 24 credits";
            }
            else
                return "Token exprised";
        }
        else {
            return "User is not student";
        }
    }
    async getCurrentStudentCourse(token) {
        const payload = this.jwtService.verify(token);
        if (payload.role == 3) {
            let student = await this.student.findOne({ email: payload.email });
            if (student) {
                console.log(student);
                return await this.registration.findOne({ student: student._id }).populate('student').populate('course').populate('subject');
            }
            else
                return "Token exprised";
        }
        else {
            return "User is not student";
        }
    }
    async getStudentCourses() {
        return await this.registration.find({}).populate('student').populate('course').populate('subject');
    }
};
RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(registration_entity_1.Registration.name)),
    __param(1, (0, mongoose_1.InjectModel)(student_entity_1.Student.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], RegistrationService);
exports.RegistrationService = RegistrationService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6f96badb082b182d5780")
/******/ })();
/******/ 
/******/ }
;