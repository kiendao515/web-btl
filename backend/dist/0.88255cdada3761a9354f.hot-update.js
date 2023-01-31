"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 45:
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
exports.CreateSectorDto = void 0;
const swagger_1 = __webpack_require__(5);
const class_validator_1 = __webpack_require__(22);
class CreateSectorDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Viện công nghệ thông tin và truyền thông'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSectorDto.prototype, "sectorName", void 0);
exports.CreateSectorDto = CreateSectorDto;


/***/ }),

/***/ 46:
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
exports.UpdateSectorDto = void 0;
const swagger_1 = __webpack_require__(5);
const class_validator_1 = __webpack_require__(22);
class UpdateSectorDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Viện công nghệ thông tin và truyền thông edit'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateSectorDto.prototype, "sectorName", void 0);
exports.UpdateSectorDto = UpdateSectorDto;


/***/ }),

/***/ 44:
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
exports.SectorController = void 0;
const common_1 = __webpack_require__(7);
const passport_1 = __webpack_require__(12);
const swagger_1 = __webpack_require__(5);
const roles_decorator_1 = __webpack_require__(18);
const roles_enum_1 = __webpack_require__(23);
const roles_guard_1 = __webpack_require__(24);
const create_sector_dto_1 = __webpack_require__(45);
const update_sector_dto_1 = __webpack_require__(46);
const sector_service_1 = __webpack_require__(47);
let SectorController = class SectorController {
    constructor(sectorService) {
        this.sectorService = sectorService;
    }
    create(createSectorDto) {
        return this.sectorService.create(createSectorDto);
    }
    getAllSector() {
        return this.sectorService.getAllSector();
    }
    async remove(id) {
        let rs = await this.sectorService.remove(id);
        console.log(rs);
        return {
            data: rs
        };
    }
    async update(id, updateSectorDto) {
        let rs = await this.sectorService.update(id, updateSectorDto);
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
    __metadata("design:paramtypes", [typeof (_b = typeof create_sector_dto_1.CreateSectorDto !== "undefined" && create_sector_dto_1.CreateSectorDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SectorController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin, roles_enum_1.RoleEnum.student),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SectorController.prototype, "getAllSector", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectorController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RoleEnum.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_sector_dto_1.UpdateSectorDto !== "undefined" && update_sector_dto_1.UpdateSectorDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], SectorController.prototype, "update", null);
SectorController = __decorate([
    (0, swagger_1.ApiTags)('Sector'),
    (0, common_1.Controller)('sector'),
    __metadata("design:paramtypes", [typeof (_a = typeof sector_service_1.SectorService !== "undefined" && sector_service_1.SectorService) === "function" ? _a : Object])
], SectorController);
exports.SectorController = SectorController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31b7a5205b04ba52430a")
/******/ })();
/******/ 
/******/ }
;