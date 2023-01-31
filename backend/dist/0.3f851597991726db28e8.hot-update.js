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
            registration_module_1.RegistrationModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 59:
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
exports.RegistrationSchema = exports.Registration = void 0;
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(11);
const course_entity_1 = __webpack_require__(54);
const student_entity_1 = __webpack_require__(10);
let Registration = class Registration {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Subject'
    }),
    __metadata("design:type", Array)
], Registration.prototype, "subject", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Student'
    }),
    __metadata("design:type", typeof (_a = typeof student_entity_1.Student !== "undefined" && student_entity_1.Student) === "function" ? _a : Object)
], Registration.prototype, "student", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Course'
    }),
    __metadata("design:type", typeof (_b = typeof course_entity_1.Course !== "undefined" && course_entity_1.Course) === "function" ? _b : Object)
], Registration.prototype, "course", void 0);
Registration = __decorate([
    (0, mongoose_1.Schema)()
], Registration);
exports.Registration = Registration;
exports.RegistrationSchema = mongoose_1.SchemaFactory.createForClass(Registration);


/***/ }),

/***/ 60:
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
exports.RegistrationController = void 0;
const common_1 = __webpack_require__(7);
const registration_service_1 = __webpack_require__(58);
const swagger_1 = __webpack_require__(5);
let RegistrationController = class RegistrationController {
    constructor(registrationService) {
        this.registrationService = registrationService;
    }
    registerCourse(req) {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const body = req.body;
        console.log(body);
        return this.registrationService.registerCourse(token, body);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/register/course'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RegistrationController.prototype, "registerCourse", null);
RegistrationController = __decorate([
    (0, swagger_1.ApiTags)('Registration'),
    (0, common_1.Controller)('registration'),
    __metadata("design:paramtypes", [typeof (_a = typeof registration_service_1.RegistrationService !== "undefined" && registration_service_1.RegistrationService) === "function" ? _a : Object])
], RegistrationController);
exports.RegistrationController = RegistrationController;


/***/ }),

/***/ 57:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationModule = void 0;
const common_1 = __webpack_require__(7);
const registration_service_1 = __webpack_require__(58);
const registration_controller_1 = __webpack_require__(60);
const mongoose_1 = __webpack_require__(8);
const registration_entity_1 = __webpack_require__(59);
const jwt_strategy_1 = __webpack_require__(41);
let RegistrationModule = class RegistrationModule {
};
RegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: registration_entity_1.Registration.name, schema: registration_entity_1.RegistrationSchema }])
        ],
        controllers: [registration_controller_1.RegistrationController],
        providers: [registration_service_1.RegistrationService, jwt_strategy_1.JwtStrategy]
    })
], RegistrationModule);
exports.RegistrationModule = RegistrationModule;


/***/ }),

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
        console.log("token", token);
        console.log("body", body);
        const payload = this.jwtService.verify(token);
        console.log(payload);
        if (payload.role == 3) {
            let student = await this.student.findOne({ email: payload.email });
            if (student) {
                console.log(student);
            }
            else
                return "Token exprised";
        }
        else {
            return "User is not student";
        }
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
/******/ 	__webpack_require__.h = () => ("6e3e8f78994bedf1290e")
/******/ })();
/******/ 
/******/ }
;