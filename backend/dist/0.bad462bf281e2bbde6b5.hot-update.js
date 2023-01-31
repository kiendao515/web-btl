"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 54:
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
exports.CourseService = void 0;
const common_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(15);
const course_entity_1 = __webpack_require__(55);
let CourseService = class CourseService {
    constructor(course) {
        this.course = course;
    }
    async create(createCourseDto) {
        let c = new course_entity_1.Course();
        c.semester = createCourseDto.semester;
        c.startDate = createCourseDto.startDate;
        c.closeDate = createCourseDto.closeDate;
        return new this.course(c).save();
    }
    async findAll() {
        return await this.course.find({});
    }
    findOne(id) {
        return `This action returns a #${id} course`;
    }
    async remove(id) {
        let rs = await this.course.findByIdAndDelete({ _id: id });
        if (rs) {
            return rs;
        }
        else
            return "Sector is not found";
    }
    async update(id, updateCourseDto) {
        let s = await this.course.findOne({ _id: id });
        if (s) {
            let rs = await this.course.findByIdAndUpdate({ _id: id }, { semeter: updateCourseDto.semester, startDate: updateCourseDto.startDate,
                closeDate: updateCo }, { new: true });
            console.log(rs);
            if (rs) {
                return rs;
            }
            else
                return "can not ipdate sector";
        }
        else
            return "sector is not found";
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(course_entity_1.Course.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CourseService);
exports.CourseService = CourseService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fa6e0957c4ab2dbdf9b1")
/******/ })();
/******/ 
/******/ }
;