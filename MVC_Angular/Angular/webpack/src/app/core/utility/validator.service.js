"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ValidatorService = (function () {
    function ValidatorService() {
    }
    /**
     * Checks URI is absolute
     * @param url url value
     * @returns url === absoluteUrl ? true : false
     */
    ValidatorService.prototype.isAbsoluteURI = function (url) {
        return (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) ? true : false;
    };
    /**
     * Is NavigationKey pressed
     * @param $event Event Object
     * @returns Given Key === NavigationKey ? true : false
     */
    ValidatorService.prototype.isNavigationKeyPressed = function ($event) {
        if ($event.keyCode === 39 || $event.keyCode === 37 ||
            $event.keyCode === 9 || $event.keyCode === 13) {
            return true;
        }
        return false;
    };
    /**
     * Is value null or undefined
     * @param value input value
     * @returns input === undefined || null ? true : false
     */
    ValidatorService.prototype.isNullOrUndefined = function (value) {
        return (value === undefined || value === null || typeof value === 'undefined') ? true : false;
    };
    /**
     * Is value null or undefined or empty
     * @param value input value
     * @returns input == null || undefined || '' ? true : false;
     */
    ValidatorService.prototype.isEmpty = function (value) {
        return (this.isNullOrUndefined(value) || value === '') ? true : false;
    };
    /**
     * Is value not a Number
     * @param value input value
     * @returns input === isNan() ? true  : false
     */
    ValidatorService.prototype.isNotANumber = function (value) {
        return isNaN(value);
    };
    /**
     * Is email valid
     * @param email email string
     * @returns string === email ? true : false
     */
    ValidatorService.prototype.isEmail = function (email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    };
    /**
     * Is multiple email valid
     * @param str email string
     * @param seperator seperator between emails
     * @returns value === mutiple email ? true : false
     */
    ValidatorService.prototype.isMultipleEmail = function (str, seperator) {
        var emails = str.split(seperator);
        for (var _i = 0, emails_1 = emails; _i < emails_1.length; _i++) {
            var email = emails_1[_i];
            if ((email.length !== 0) && this.isEmail(email) === false) {
                return false;
            }
        }
        return true;
    };
    return ValidatorService;
}());
ValidatorService = __decorate([
    core_1.Injectable()
], ValidatorService);
exports.ValidatorService = ValidatorService;
//# sourceMappingURL=validator.service.js.map