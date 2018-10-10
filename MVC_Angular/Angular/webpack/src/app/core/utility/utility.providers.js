"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iconvert_service_1 = require("./iconvert.service");
var convert_service_1 = require("./convert.service");
var idate_service_1 = require("./idate.service");
var date_service_1 = require("./date.service");
var iuri_service_1 = require("./iuri.service");
var uri_service_1 = require("./uri.service");
var ivalidator_service_1 = require("./ivalidator.service");
var validator_service_1 = require("./validator.service");
exports.UtilityProviders = {
    IConvertService: {
        provide: iconvert_service_1.IConvertService,
        useClass: convert_service_1.ConvertService
    },
    IDateService: {
        provide: idate_service_1.IDateService,
        useClass: date_service_1.DateService
    },
    IUriService: {
        provide: iuri_service_1.IUriService,
        useClass: uri_service_1.UriService
    },
    IValidatorService: {
        provide: ivalidator_service_1.IValidatorService,
        useClass: validator_service_1.ValidatorService
    }
};
//# sourceMappingURL=utility.providers.js.map