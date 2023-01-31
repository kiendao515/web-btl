"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 19:
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentService = void 0;
const common_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(15);
const bcrypt = __webpack_require__(20);
const student_entity_1 = __webpack_require__(14);
const login_dto_1 = __webpack_require__(21);
const jwt_1 = __webpack_require__(10);
let StudentService = class StudentService {
    constructor(student, jwtService) {
        this.student = student;
        this.jwtService = jwtService;
    }
    async create(createStudentDto) {
        try {
            const s = new student_entity_1.Student();
            const hashPassword = await bcrypt.hash(createStudentDto.password, 10);
            s.email = createStudentDto.email;
            s.password = hashPassword;
            s.name = createStudentDto.name;
            s.studentCode = createStudentDto.studentCode;
            s.identification = createStudentDto.identification;
            s.userImage = createStudentDto.userImage;
            s.age = createStudentDto.age;
            s.sector = createStudentDto.sector;
            s.totalOfCredit = createStudentDto.totalOfCredit;
            return new this.student(s).save();
        }
        catch (error) {
            throw new Error(`Error create student ${error}`);
        }
    }
    async getAllStudents() {
        return this.student.find({}).populate('sector');
    }
    async checkStudentLogin(loginDto) {
        try {
            const department = await this.student.findOne({ email: loginDto.email });
            if (department) {
                const isMatch = await bcrypt.compare(loginDto.password, department.password);
                if (isMatch) {
                    return department;
                }
                else {
                    throw new Error(`password is incorrect`);
                }
            }
            else {
                return null;
            }
        }
        catch (err) {
            throw new Error(`Error finding ${err} user ${err.message}`);
        }
    }
    async registerCourse(token) {
        console.log("token", token);
        const payload = this.jwtService.verify(token);
        console.log(payload);
        if (payload.role == 3) {
            let student = this.student.findOne({ email: payload.email });
            if (student) {
            }
            else
                return "Student im";
        }
        else {
            return "User is not student";
        }
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof login_dto_1.StudentLoginDto !== "undefined" && login_dto_1.StudentLoginDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], StudentService.prototype, "checkStudentLogin", null);
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(student_entity_1.Student.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], StudentService);
exports.StudentService = StudentService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("28e24c2cb7bc68410903")
/******/ })();
/******/ 
/******/ }
;