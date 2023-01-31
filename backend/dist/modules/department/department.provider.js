"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catsProviders = void 0;
const department_entity_1 = require("./entities/department.entity");
exports.catsProviders = [
    {
        provide: 'Department',
        useFactory: (mongoose) => mongoose.model('Cat', department_entity_1.DepartmentSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=department.provider.js.map