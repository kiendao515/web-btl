"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 31:
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
exports.TeacherService = void 0;
const common_1 = __webpack_require__(7);
const teacher_entity_1 = __webpack_require__(29);
const bcrypt = __webpack_require__(23);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(14);
const login_dto_1 = __webpack_require__(50);
let TeacherService = class TeacherService {
    constructor(teacher) {
        this.teacher = teacher;
    }
    async create(createTeacherDto) {
        try {
            const teacher = new teacher_entity_1.Teacher();
            const hashPassword = await bcrypt.hash(createTeacherDto.password, 10);
            teacher.email = createTeacherDto.email;
            teacher.name = createTeacherDto.name;
            teacher.password = hashPassword;
            teacher.teacherIdentity = createTeacherDto.teacherID;
            teacher.userImage = createTeacherDto.userImage;
            teacher.identification = createTeacherDto.identification;
            return new this.teacher(teacher).save();
        }
        catch (err) {
            throw new Error(`Error creating ${err} user ${err.message}`);
        }
    }
    async findOne(email, password) {
        try {
            const user = await this.teacher.findOne({
                where: { email },
            });
            const isMatch = await bcrypt.compare(password, user.password);
            if (user && isMatch) {
                return user;
            }
            else {
                throw new Error(`User not found`);
            }
        }
        catch (err) {
            throw new Error(`Error finding ${err} user ${err.message}`);
        }
    }
    async checkTeacherLogin(loginDto) {
        try {
            const t = await this.teacher.findOne({ email: loginDto.email });
            if (t) {
                const isMatch = await bcrypt.compare(loginDto.password, t.password);
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
    async findAll() {
        const teachers = await this.teacher.find({});
        return teachers;
    }
    async getProfile() {
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TeacherService.prototype, "checkTeacherLogin", null);
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(teacher_entity_1.Teacher.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TeacherService);
exports.TeacherService = TeacherService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("32464bf1157cf8a158cc")
/******/ })();
/******/ 
/******/ }
;