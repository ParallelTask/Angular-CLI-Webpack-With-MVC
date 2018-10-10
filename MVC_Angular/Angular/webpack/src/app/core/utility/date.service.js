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
var DateService = (function () {
    function DateService() {
    }
    /**
     * Date format: 1/21/2017
     * @param value date
     * @returns formatted date 01/21/2017
     */
    DateService.prototype.getMmDdYyyy = function (value) {
        var date = moment(value);
        return date.isValid() ? date.format('MM/DD/YYYY') : null;
    };
    /**
     * Date format: Jan-21-2017
     * @param value date string
     * @returns Jan-21-2017
     */
    DateService.prototype.getMmmDdYYYY = function (value) {
        var date = moment(value);
        return date.isValid() ? date.format('MMM-DD-YYYY') : null;
    };
    return DateService;
}());
DateService = __decorate([
    core_1.Injectable()
], DateService);
exports.DateService = DateService;
//# sourceMappingURL=date.service.js.map