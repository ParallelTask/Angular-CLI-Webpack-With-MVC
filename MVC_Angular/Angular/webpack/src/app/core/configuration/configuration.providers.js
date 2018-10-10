"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration_service_1 = require("./configuration.service");
var iconfiguration_service_1 = require("./iconfiguration.service");
exports.ConfigurationProviders = {
    IConfigurationService: {
        provide: iconfiguration_service_1.IConfigurationService,
        useClass: configuration_service_1.ConfigurationService
    }
};
//# sourceMappingURL=configuration.providers.js.map