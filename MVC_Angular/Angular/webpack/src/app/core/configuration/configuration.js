"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration_dev_1 = require("./configuration.dev");
var configuration_release_1 = require("./configuration.release");
var app_configuration_1 = require("../../app.configuration");
exports.Configuration = (function () {
    return app_configuration_1.AppConfiguration.environment === 'dev' ? configuration_dev_1.ConfigurationDev : configuration_release_1.ConfigurationRelease;
})();
//# sourceMappingURL=configuration.js.map