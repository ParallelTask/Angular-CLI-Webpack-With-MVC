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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var decorators_1 = require("../../core/decorators/decorators");
var AboutService = (function () {
    function AboutService(http) {
        this.http = http;
    }
    AboutService.prototype.getCustomerById = function (id) {
        return this.http.get("Customer/GetCustomerById/" + id).map(function (customer) {
            if (customer == null) {
                return [];
            }
            return customer;
        });
    };
    AboutService.prototype.getContactEmail = function () {
        return 'pt-hacker@example.com';
    };
    return AboutService;
}());
__decorate([
    decorators_1.TimeInterceptor('AboutService', 'getContactEmail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AboutService.prototype, "getContactEmail", null);
AboutService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AboutService);
exports.AboutService = AboutService;
//# sourceMappingURL=about.service.js.map