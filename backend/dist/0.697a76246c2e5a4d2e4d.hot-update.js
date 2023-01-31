"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SectorService = void 0;
const common_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(15);
const sector_entity_1 = __webpack_require__(16);
let SectorService = class SectorService {
    constructor(sector) {
        this.sector = sector;
    }
    async create(createSectorDto) {
        try {
            const sector = new sector_entity_1.Sector();
            sector.sectorName = createSectorDto.sectorName;
            return new this.sector(sector).save();
        }
        catch (error) {
            throw new Error(`Error create sector ${error}`);
        }
    }
    async getAllSector() {
        return this.sector.find({});
    }
    async remove(id) {
        let rs = await this.sector.findByIdAndDelete({ _id: id });
        if (rs) {
            return rs;
        }
        else
            return "Sector is not found";
    }
    async update(id, updateSectorDto) {
        let s = await this.sector.findOne({ _id: id });
        if (s) {
            await this.sector.find;
        }
        else
            return "sector is not found";
    }
};
SectorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sector_entity_1.Sector.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], SectorService);
exports.SectorService = SectorService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("344565f6e3d95d52620a")
/******/ })();
/******/ 
/******/ }
;