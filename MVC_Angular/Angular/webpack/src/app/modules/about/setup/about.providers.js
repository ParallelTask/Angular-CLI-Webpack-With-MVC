"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var about_service_1 = require("../about.service");
var iabout_service_1 = require("../iabout.service");
exports.AboutProviders = {
    IAboutService: {
        provide: iabout_service_1.IAboutService,
        useClass: about_service_1.AboutService
    }
};
//# sourceMappingURL=about.providers.js.map