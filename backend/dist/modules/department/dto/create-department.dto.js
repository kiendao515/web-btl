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
exports.CreateDepartmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDepartmentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'nguyenvanA@sis.hust.edu.vn',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'department1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'kiên',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'DB1000',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "departmentID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '002102826251',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "identification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'https://vtvgo-image.vtvdigital.vn/images/20221218/3d15eb3c-38f3-471f-93ce-d6e934e2876f.jpg',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "userImage", void 0);
exports.CreateDepartmentDto = CreateDepartmentDto;
//# sourceMappingURL=create-department.dto.js.map