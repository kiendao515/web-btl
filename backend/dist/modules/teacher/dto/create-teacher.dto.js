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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTeacherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTeacherDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'daotrungkien515@gmail.com',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'abcdef',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'kiên',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'ABC2000',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "teacherID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '002102826251',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "identification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'https://vtvgo-image.vtvdigital.vn/images/20221218/3d15eb3c-38f3-471f-93ce-d6e934e2876f.jpg',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "userImage", void 0);
exports.CreateTeacherDto = CreateTeacherDto;
//# sourceMappingURL=create-teacher.dto.js.map