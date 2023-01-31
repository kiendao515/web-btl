"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 21:
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
exports.DepartmentService = void 0;
const common_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(14);
const department_entity_1 = __webpack_require__(22);
const bcrypt = __webpack_require__(23);
const login_dto_1 = __webpack_require__(24);
let DepartmentService = class DepartmentService {
    constructor(department) {
        this.department = department;
    }
    async checkDepartmentLogin(loginDto) {
        try {
            const department = await this.department.findOne({ email: loginDto.email });
            if (department) {
                const isMatch = await bcrypt.compare(loginDto.password, department.password);
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
    async create(createDepartmentDto) {
        try {
            const department = new department_entity_1.Department();
            const hashPassword = await bcrypt.hash(createDepartmentDto.password, 10);
            department.email = createDepartmentDto.email;
            department.identification = createDepartmentDto.identification;
            department.name = createDepartmentDto.name;
            department.departmentIdentity = createDepartmentDto.departmentID;
            department.userImage = createDepartmentDto.userImage;
            department.password = hashPassword;
            console.log(department);
            await this.department.create(o);
            return department;
        }
        catch (error) {
            throw new Error(`Error create department ${error}`);
        }
    }
    async findAll() {
        const departments = await this.department.find({});
        console.log(departments);
        return departments;
    }
    update(id, updateDepartmentDto) {
        return `This action updates a #${id} department`;
    }
    remove(id) {
        return `This action removes a #${id} department`;
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DepartmentService.prototype, "checkDepartmentLogin", null);
DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(department_entity_1.Department.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], DepartmentService);
exports.DepartmentService = DepartmentService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("76b14501bae3028a2397")
/******/ })();
/******/ 
/******/ }
;