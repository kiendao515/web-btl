"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const teacher_entity_1 = require("./entities/teacher.entity");
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TeacherService = class TeacherService {
    constructor(teacher) {
        this.teacher = teacher;
    }
    async create(createTeacherDto) {
        try {
            const teacher = new teacher_entity_1.Teacher();
            const hashPassword = await bcrypt.hash(createTeacherDto.password, 10);
            teacher.email = createTeacherDto.email;
            teacher.name = createTeacherDto.name;
            teacher.password = hashPassword;
            teacher.teacherIdentity = createTeacherDto.teacherID;
            teacher.userImage = createTeacherDto.userImage;
            teacher.identification = createTeacherDto.identification;
            return new this.teacher(teacher).save();
        }
        catch (err) {
            throw new Error(`Error creating ${err} user ${err.message}`);
        }
    }
    async findOne(email, password) {
        try {
            const user = await this.teacher.findOne({
                where: { email },
            });
            const isMatch = await bcrypt.compare(password, user.password);
            if (user && isMatch) {
                return user;
            }
            else {
                throw new Error(`User not found`);
            }
        }
        catch (err) {
            throw new Error(`Error finding ${err} user ${err.message}`);
        }
    }
    async findAll() {
        const teachers = await this.teacher.find({});
        return teachers;
    }
    async registerOffClass() {
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(teacher_entity_1.Teacher.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map