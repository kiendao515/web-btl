"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 50:
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
exports.SubjectsController = void 0;
const common_1 = __webpack_require__(7);
const passport_1 = __webpack_require__(12);
const swagger_1 = __webpack_require__(5);
const roles_decorator_1 = __webpack_require__(18);
const roles_enum_1 = __webpack_require__(23);
const roles_guard_1 = __webpack_require__(24);
const create_subject_dto_1 = __webpack_require__(51);
const subjects_service_1 = __webpack_require__(52);
let SubjectsController = class SubjectsController {
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    create(createSubjectDto) {
        return this.subjectService.create(createSubjectDto);
    }
    getAllSector() {
        return this.subjectService.getAllSubjects();
    }
    async remove(id) {
        let rs = await this.subjectService.remove(id);
        console.log(rs);
        return {
            status: "deleted",
            data: rs
        };
    }
    async update(id, updateSectorDto) {
        let rs = await this.subjectService.update(id, updateSectorDto);
        console.log(rs);
        return {
            data: rs
        };
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_subject_dto_1.CreateSubjectDto !== "undefined" && create_subject_dto_1.CreateSubjectDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.student, roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "getAllSector", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof UpdateSectorDto !== "undefined" && UpdateSectorDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], SubjectsController.prototype, "update", null);
SubjectsController = __decorate([
    (0, swagger_1.ApiTags)('Subject'),
    (0, common_1.Controller)('subjects'),
    __metadata("design:paramtypes", [typeof (_a = typeof subjects_service_1.SubjectsService !== "undefined" && subjects_service_1.SubjectsService) === "function" ? _a : Object])
], SubjectsController);
exports.SubjectsController = SubjectsController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dbfdcee31aed52b50bca")
/******/ })();
/******/ 
/******/ }
;