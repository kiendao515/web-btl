"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddCreditService = void 0;
const common_1 = __webpack_require__(7);
const jwt_1 = __webpack_require__(24);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(11);
const registration_entity_1 = __webpack_require__(59);
const student_entity_1 = __webpack_require__(10);
const add_credit_entity_1 = __webpack_require__(64);
let AddCreditService = class AddCreditService {
    constructor(student, addCredit, registration, jwtService) {
        this.student = student;
        this.addCredit = addCredit;
        this.registration = registration;
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
        return await this.addCredit.find({ check: false });
    }
    async acceptRegisterMoreCredit(addCredit) {
        this.addCredit.findOneAndUpdate({ _id: addCredit.addCreditId }, { check: true }, { new: true }, (err, doc) => {
            if (doc)
                return doc;
        });
    }
    findOne(id) {
        return `This action returns a #${id} addCredit`;
    }
};
AddCreditService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(student_entity_1.Student.name)),
    __param(1, (0, mongoose_1.InjectModel)(add_credit_entity_1.AddCredit.name)),
    __param(2, (0, mongoose_1.InjectModel)(registration_entity_1.Registration.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _d : Object])
], AddCreditService);
exports.AddCreditService = AddCreditService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("34ccc405d1dff5016dd0")
/******/ })();
/******/ 
/******/ }
;