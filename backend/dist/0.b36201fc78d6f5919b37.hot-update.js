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
            add_credit_module_1.AddCreditModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 65:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddCreditController = void 0;
const common_1 = __webpack_require__(7);
const swagger_1 = __webpack_require__(5);
const add_credit_service_1 = __webpack_require__(63);
const create_add_credit_dto_1 = __webpack_require__(66);
let AddCreditController = class AddCreditController {
    constructor(addCreditService) {
        this.addCreditService = addCreditService;
    }
    async create(req, createAddCreditDto) {
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
            await this.addCreditService.create(token, body);
            return {
                data: "register success!"
            };
        }
    }
    findAll() {
        return this.addCreditService.findAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof create_add_credit_dto_1.CreateAddCreditDto !== "undefined" && create_add_credit_dto_1.CreateAddCreditDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AddCreditController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddCreditController.prototype, "findAll", null);
AddCreditController = __decorate([
    (0, swagger_1.ApiTags)('Register-more-credit'),
    (0, common_1.Controller)('add-credit'),
    __metadata("design:paramtypes", [typeof (_a = typeof add_credit_service_1.AddCreditService !== "undefined" && add_credit_service_1.AddCreditService) === "function" ? _a : Object])
], AddCreditController);
exports.AddCreditController = AddCreditController;


/***/ }),

/***/ 62:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddCreditModule = void 0;
const common_1 = __webpack_require__(7);
const add_credit_service_1 = __webpack_require__(63);
const add_credit_controller_1 = __webpack_require__(65);
const mongoose_1 = __webpack_require__(8);
const add_credit_entity_1 = __webpack_require__(64);
const student_entity_1 = __webpack_require__(10);
const jwt_1 = __webpack_require__(24);
const jwt_strategy_1 = __webpack_require__(41);
const student_service_1 = __webpack_require__(15);
let AddCreditModule = class AddCreditModule {
};
AddCreditModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: add_credit_entity_1.AddCredit.name, schema: add_credit_entity_1.AddCreditSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: student_entity_1.Student.name, schema: student_entity_1.StudentSchema }]),
            jwt_1.JwtModule.register({
                secret: "kiendao2001",
                signOptions: { expiresIn: '10h' },
            }),
        ],
        controllers: [add_credit_controller_1.AddCreditController],
        providers: [add_credit_service_1.AddCreditService, jwt_strategy_1.JwtStrategy, student_service_1.StudentService]
    })
], AddCreditModule);
exports.AddCreditModule = AddCreditModule;


/***/ }),

/***/ 63:
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
exports.AddCreditService = void 0;
const common_1 = __webpack_require__(7);
const jwt_1 = __webpack_require__(24);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(11);
const student_entity_1 = __webpack_require__(10);
const add_credit_entity_1 = __webpack_require__(64);
let AddCreditService = class AddCreditService {
    constructor(student, addCredit, jwtService) {
        this.student = student;
        this.addCredit = addCredit;
        this.jwtService = jwtService;
    }
    async create(token, createAddCreditDto) {
        const payload = this.jwtService.verify(token);
        if (payload.role == 3) {
            let student = await this.student.findOne({ email: payload.email });
            if (student) {
                let c = new add_credit_entity_1.AddCredit();
                c.subject = createAddCreditDto.subject;
                c.course = createAddCreditDto.course;
                c.student = student;
                c.reason = createAddCreditDto.reason;
                return new this.addCredit(c).save();
            }
        }
    }
    async findAll() {
        return await this.addCredit.find({});
    }
    findOne(id) {
        return `This action returns a #${id} addCredit`;
    }
};
AddCreditService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(student_entity_1.Student.name)),
    __param(1, (0, mongoose_1.InjectModel)(add_credit_entity_1.AddCredit.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], AddCreditService);
exports.AddCreditService = AddCreditService;


/***/ }),

/***/ 66:
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
exports.CreateAddCreditDto = void 0;
const swagger_1 = __webpack_require__(5);
const course_entity_1 = __webpack_require__(54);
const subjects_entity_1 = __webpack_require__(48);
class CreateAddCreditDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: subjects_entity_1.Subject, isArray: true, required: true, example: ['63bfd31db7fa1716a9ab5ba0', '63bfd60c9f015b2c3d39abf1'] }),
    __metadata("design:type", Array)
], CreateAddCreditDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: course_entity_1.Course, required: true, example: '63c2f036519beb6869bcee95' }),
    __metadata("design:type", typeof (_a = typeof course_entity_1.Course !== "undefined" && course_entity_1.Course) === "function" ? _a : Object)
], CreateAddCreditDto.prototype, "course", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true, example: 'vi em can dang ky de ra truong som' }),
    __metadata("design:type", String)
], CreateAddCreditDto.prototype, "reason", void 0);
exports.CreateAddCreditDto = CreateAddCreditDto;


/***/ }),

/***/ 64:
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
exports.AddCreditSchema = exports.AddCredit = void 0;
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(11);
const course_entity_1 = __webpack_require__(54);
const student_entity_1 = __webpack_require__(10);
let AddCredit = class AddCredit {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: [mongoose_2.default.Schema.Types.ObjectId],
        ref: 'Subject'
    }),
    __metadata("design:type", Array)
], AddCredit.prototype, "subject", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Student'
    }),
    __metadata("design:type", typeof (_a = typeof student_entity_1.Student !== "undefined" && student_entity_1.Student) === "function" ? _a : Object)
], AddCredit.prototype, "student", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Course'
    }),
    __metadata("design:type", typeof (_b = typeof course_entity_1.Course !== "undefined" && course_entity_1.Course) === "function" ? _b : Object)
], AddCredit.prototype, "course", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true
    }),
    __metadata("design:type", String)
], AddCredit.prototype, "reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        required: true,
        default: false
    }),
    __metadata("design:type", Boolean)
], AddCredit.prototype, "check", void 0);
AddCredit = __decorate([
    (0, mongoose_1.Schema)()
], AddCredit);
exports.AddCredit = AddCredit;
exports.AddCreditSchema = mongoose_1.SchemaFactory.createForClass(AddCredit);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b90cef0d2566232653e")
/******/ })();
/******/ 
/******/ }
;