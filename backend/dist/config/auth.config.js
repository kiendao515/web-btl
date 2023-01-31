"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('auth', () => ({
    secret: "kiendao2001",
    expires: "10h"
}));
//# sourceMappingURL=auth.config.js.map