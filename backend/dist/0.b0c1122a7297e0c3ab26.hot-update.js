"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 26:
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
exports.DepartmentController = void 0;
const common_1 = __webpack_require__(7);
const passport_1 = __webpack_require__(16);
const swagger_1 = __webpack_require__(5);
const roles_decorator_1 = __webpack_require__(11);
const roles_enum_1 = __webpack_require__(15);
const roles_guard_1 = __webpack_require__(17);
const department_service_1 = __webpack_require__(21);
const create_department_dto_1 = __webpack_require__(27);
const update_department_dto_1 = __webpack_require__(28);
let DepartmentController = class DepartmentController {
    constructor(departmentService) {
        this.departmentService = departmentService;
    }
    create(createDepartmentDto) {
        return this.departmentService.create(createDepartmentDto);
    }
    findAll() {
        return this.departmentService.findAll();
    }
    update(id, updateDepartmentDto) {
        return this.departmentService.update(+id, updateDepartmentDto);
    }
    remove(id) {
        return this.departmentService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_department_dto_1.CreateDepartmentDto !== "undefined" && create_department_dto_1.CreateDepartmentDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], DepartmentController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepartmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_department_dto_1.UpdateDepartmentDto !== "undefined" && update_department_dto_1.UpdateDepartmentDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], DepartmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartmentController.prototype, "remove", null);
DepartmentController = __decorate([
    (0, swagger_1.ApiTags)('Department'),
    (0, common_1.Controller)('department'),
    __metadata("design:paramtypes", [typeof (_a = typeof department_service_1.DepartmentService !== "undefined" && department_service_1.DepartmentService) === "function" ? _a : Object])
], DepartmentController);
exports.DepartmentController = DepartmentController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("082f06696be0599765ea")
/******/ })();
/******/ 
/******/ }
;