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
const auth_module_1 = __webpack_require__(18);
const teacher_module_1 = __webpack_require__(30);
const department_module_1 = __webpack_require__(20);
const sector_module_1 = __webpack_require__(40);
const subjects_module_1 = __webpack_require__(45);
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
            subjects_module_1.SubjectsModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 48:
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
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Sector' }),
    __metadata("design:type", typeof (_b = typeof sector_entity_1.Sector !== "undefined" && sector_entity_1.Sector) === "function" ? _b : Object)
], Subject.prototype, "sector", void 0);
Subject = __decorate([
    (0, mongoose_1.Schema)()
], Subject);
exports.Subject = Subject;
exports.SubjectSchema = mongoose_1.SchemaFactory.createForClass(Subject);


/***/ }),

/***/ 46:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectsController = void 0;
const common_1 = __webpack_require__(7);
let SubjectsController = class SubjectsController {
};
SubjectsController = __decorate([
    (0, common_1.Controller)('subjects')
], SubjectsController);
exports.SubjectsController = SubjectsController;


/***/ }),

/***/ 45:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectsModule = void 0;
const common_1 = __webpack_require__(7);
const subjects_controller_1 = __webpack_require__(46);
const subjects_service_1 = __webpack_require__(47);
let SubjectsModule = class SubjectsModule {
};
SubjectsModule = __decorate([
    (0, common_1.Module)({
        controllers: [subjects_controller_1.SubjectsController],
        providers: [subjects_service_1.SubjectsService]
    })
], SubjectsModule);
exports.SubjectsModule = SubjectsModule;


/***/ }),

/***/ 47:
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
const subjects_entity_1 = __webpack_require__(48);
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
            subject.sector.sectorName = createSectorDto.sector.sectorName;
            return new this.subject(subject).save();
        }
        catch (error) {
            throw new Error(`Error create sector ${error}`);
        }
    }
    async getAllSector() {
        return this.subject.find({});
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
/******/ 	__webpack_require__.h = () => ("fcb9b154d20dc8b8a9a6")
/******/ })();
/******/ 
/******/ }
;