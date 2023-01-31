"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 35:
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
exports.TeacherService = void 0;
const common_1 = __webpack_require__(7);
const teacher_entity_1 = __webpack_require__(33);
const bcrypt = __webpack_require__(20);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(15);
const login_dto_1 = __webpack_require__(36);
const jwt_1 = __webpack_require__(10);
let TeacherService = class TeacherService {
    constructor(teacher, jwtService) {
        this.teacher = teacher;
        this.jwtService = jwtService;
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
                    return t;
                }
                else {
                    throw new Error(`password is incorrect`);
                }
            }
            else {
                return new common_1.HttpException({ message: 'Can not login' }, common_1.HttpStatus.UNAUTHORIZED);
                ;
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
    async getTeacherInfo(token) {
        const payload = this.jwtService.verify(token);
        if (payload.role == 2) {
            let teacher = await this.teacher.findOne({ email: payload.email });
            if (teacher) {
                return Object.assign(Object.assign({}, teacher.toObject()), { role: 'teacher' });
            }
            else
                return null;
        }
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TeacherService.prototype, "checkTeacherLogin", null);
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(teacher_entity_1.Teacher.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], TeacherService);
exports.TeacherService = TeacherService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4786076337ca04f0b087")
/******/ })();
/******/ 
/******/ }
;