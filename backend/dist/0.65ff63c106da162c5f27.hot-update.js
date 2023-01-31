"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 6:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(8);
const student_module_1 = __webpack_require__(9);
const auth_module_1 = __webpack_require__(23);
const teacher_module_1 = __webpack_require__(32);
const department_module_1 = __webpack_require__(25);
const sector_module_1 = __webpack_require__(43);
const subjects_module_1 = __webpack_require__(47);
const course_module_1 = __webpack_require__(52);
const registration_module_1 = __webpack_require__(57);
const add_credit_module_1 = __webpack_require__(62);
const cancel_credit_module_1 = __webpack_require__(68);
const verify_student_module_1 = __webpack_require__(74);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://kiendao:kiendao2001@cluster0.bnqgz.mongodb.net/web-back?retryWrites=true&w=majority'),
            student_module_1.StudentModule,
            teacher_module_1.TeacherModule,
            auth_module_1.AuthModule,
            department_module_1.DepartmentModule,
            sector_module_1.SectorModule,
            subjects_module_1.SubjectsModule,
            course_module_1.CourseModule,
            registration_module_1.RegistrationModule,
            add_credit_module_1.AddCreditModule,
            cancel_credit_module_1.CancelCreditModule,
            verify_student_module_1.VerifyStudentModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 78:
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
exports.CreateVerifyStudentDto = void 0;
const swagger_1 = __webpack_require__(5);
const class_validator_1 = __webpack_require__(18);
class CreateVerifyStudentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'https://static.euronews.com/articles/stories/06/35/53/24/773x435_cmsv2_548e11b5-0a57-53f4-88d9-5ea703413300-6355324.jpg',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVerifyStudentDto.prototype, "identityImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'https://www.shutterstock.com/image-vector/student-id-card-university-school-600w-1421032442.jpg',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVerifyStudentDto.prototype, "studentIdentityImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO-giaykhaisinh.jpg',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVerifyStudentDto.prototype, "birthCertificateImage", void 0);
exports.CreateVerifyStudentDto = CreateVerifyStudentDto;


/***/ }),

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
    (0, swagger_1.ApiProperty)({ type: String, required: true, example: '63ca5319701c7a1a646f7645' }),
    __metadata("design:type", String)
], UpdateVerifyStudentDto.prototype, "verifyStudentId", void 0);
exports.UpdateVerifyStudentDto = UpdateVerifyStudentDto;


/***/ }),

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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerifyStudentSchema = exports.VerifyStudent = void 0;
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(11);
const student_entity_1 = __webpack_require__(10);
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
        type: Boolean,
        required: true,
        default: false
    }),
    __metadata("design:type", Boolean)
], VerifyStudent.prototype, "check", void 0);
VerifyStudent = __decorate([
    (0, mongoose_1.Schema)()
], VerifyStudent);
exports.VerifyStudent = VerifyStudent;
exports.VerifyStudentSchema = mongoose_1.SchemaFactory.createForClass(VerifyStudent);


/***/ }),

/***/ 77:
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
exports.VerifyStudentController = void 0;
const common_1 = __webpack_require__(7);
const verify_student_service_1 = __webpack_require__(75);
const create_verify_student_dto_1 = __webpack_require__(78);
const update_verify_student_dto_1 = __webpack_require__(79);
const swagger_1 = __webpack_require__(5);
const roles_decorator_1 = __webpack_require__(14);
const roles_enum_1 = __webpack_require__(19);
const passport_1 = __webpack_require__(20);
const roles_guard_1 = __webpack_require__(21);
let VerifyStudentController = class VerifyStudentController {
    constructor(verifyStudentService) {
        this.verifyStudentService = verifyStudentService;
    }
    async create(req, createVerifyStudentDto) {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const body = req.body;
        if (!token) {
            return {
                error: 403,
                message: 'token required'
            };
        }
        else {
            return await this.verifyStudentService.create(token, body);
        }
    }
    async verifyStudent(update) {
        let c = await this.verifyStudentService.verifyValidStudent(update);
        if (c != null) {
            return {
                status: 200,
                data: c
            };
        }
        else
            return { status: 200, message: 'Đơn đăng ký phê duyệt sinh viên không tồn tại' };
    }
    findAll() {
        return this.verifyStudentService.findAll();
    }
    findOne(id) {
        return this.verifyStudentService.findOne(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof create_verify_student_dto_1.CreateVerifyStudentDto !== "undefined" && create_verify_student_dto_1.CreateVerifyStudentDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], VerifyStudentController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.department),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Post)('/check'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_verify_student_dto_1.UpdateVerifyStudentDto !== "undefined" && update_verify_student_dto_1.UpdateVerifyStudentDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], VerifyStudentController.prototype, "verifyStudent", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VerifyStudentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VerifyStudentController.prototype, "findOne", null);
VerifyStudentController = __decorate([
    (0, swagger_1.ApiTags)('Verify-Student'),
    (0, common_1.Controller)('verify-student'),
    __metadata("design:paramtypes", [typeof (_a = typeof verify_student_service_1.VerifyStudentService !== "undefined" && verify_student_service_1.VerifyStudentService) === "function" ? _a : Object])
], VerifyStudentController);
exports.VerifyStudentController = VerifyStudentController;


/***/ }),

/***/ 74:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerifyStudentModule = void 0;
const common_1 = __webpack_require__(7);
const verify_student_service_1 = __webpack_require__(75);
const verify_student_controller_1 = __webpack_require__(77);
const mongoose_1 = __webpack_require__(8);
const student_entity_1 = __webpack_require__(10);
const jwt_1 = __webpack_require__(24);
const jwt_strategy_1 = __webpack_require__(41);
const student_service_1 = __webpack_require__(15);
let VerifyStudentModule = class VerifyStudentModule {
};
VerifyStudentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: student_entity_1.Student.name, schema: student_entity_1.StudentSchema }]),
            jwt_1.JwtModule.register({
                secret: "kiendao2001",
                signOptions: { expiresIn: '10h' },
            }),
        ],
        controllers: [verify_student_controller_1.VerifyStudentController],
        providers: [verify_student_service_1.VerifyStudentService, jwt_strategy_1.JwtStrategy, student_service_1.StudentService]
    })
], VerifyStudentModule);
exports.VerifyStudentModule = VerifyStudentModule;


/***/ }),

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
        return `This action returns all verifyStudent`;
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
/******/ 	__webpack_require__.h = () => ("335c3db640f22e11432a")
/******/ })();
/******/ 
/******/ }
;