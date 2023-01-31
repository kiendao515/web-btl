"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const department_module_1 = require("../department/department.module");
const department_service_1 = require("../department/department.service");
const department_entity_1 = require("../department/entities/department.entity");
const student_module_1 = require("../student/student.module");
const teacher_entity_1 = require("../teacher/entities/teacher.entity");
const teacher_module_1 = require("../teacher/teacher.module");
const teacher_service_1 = require("../teacher/teacher.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: teacher_entity_1.Teacher.name, schema: teacher_entity_1.TeacherSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: department_entity_1.Department.name, schema: department_entity_1.DepartmentSchema }]),
            student_module_1.StudentModule,
            teacher_module_1.TeacherModule,
            department_module_1.DepartmentModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: "kiendao2001",
                signOptions: { expiresIn: '10h' },
            }),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, teacher_service_1.TeacherService, department_service_1.DepartmentService],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map