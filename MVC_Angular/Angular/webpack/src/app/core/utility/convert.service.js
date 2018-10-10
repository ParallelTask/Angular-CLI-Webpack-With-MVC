"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var ConvertService = (function () {
    function ConvertService() {
    }
    /**
     * Converts to decimal
     * @param value input value
     * @returns decimal number
     */
    ConvertService.prototype.convertToDecimal = function (value) {
        return parseFloat(value);
    };
    /**
     * Converts to int
     * @param value input value
     * @returns integer
     */
    ConvertService.prototype.convertToInt = function (value) {
        return parseInt(value);
    };
    /**
     * Parse JSON
     * @param value input value
     * @returns json
     */
    ConvertService.prototype.convertToJSON = function (value) {
        return JSON.parse(value);
    };
    /**
     * Returns Javascript Date object
     * @param value input value
     * @returns javascript date object
     */
    ConvertService.prototype.convertToDate = function (value) {
        var date = moment(value);
        return date.isValid() ? date.toDate() : null;
    };
    return ConvertService;
}());
ConvertService = __decorate([
    core_1.Injectable()
], ConvertService);
exports.ConvertService = ConvertService;
//# sourceMappingURL=convert.service.js.map