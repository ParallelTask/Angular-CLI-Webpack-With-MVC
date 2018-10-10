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
require("rxjs/add/operator/do");
var ivalidator_service_1 = require("../utility/ivalidator.service");
var iconfiguration_service_1 = require("../configuration/iconfiguration.service");
var app_configuration_1 = require("../../app.configuration");
var HttpInterceptorService = (function () {
    function HttpInterceptorService(validatorService, configService) {
        this.validatorService = validatorService;
        this.configService = configService;
    }
    /**
     * Intercepts every HTTP ajax request
     * @param req request object
     * @param next http handler object
     */
    HttpInterceptorService.prototype.intercept = function (req, next) {
        if (app_configuration_1.AppConfiguration.enableHttpInterceptor) {
            var customHeaders = this.addHeaders(new http_1.HttpHeaders());
            var apiOrigin = this.validatorService.isAbsoluteURI(req.url) ? req.url : this.configService.apiOrigin() + req.url;
            var clonedRequest = req.clone({ headers: customHeaders, url: apiOrigin });
            return next.handle(clonedRequest).do(function (event) { }, function (err) {
                if (err instanceof http_1.HttpErrorResponse && err.status === 401) {
                }
                else if (err instanceof http_1.HttpErrorResponse && err.status === 403) {
                }
                else if (err instanceof http_1.HttpErrorResponse && err.status === 404) {
                }
                else { }
            });
        }
        else {
            return next.handle(req);
        }
    };
    /**
     * Adds cutom headers
     * @param headers HttpHeaders object
     */
    HttpInterceptorService.prototype.addHeaders = function (headers) {
        var _headers = headers;
        _headers = headers.set('Content-Type', 'application/json');
        _headers = headers.set('custom-header-key', 'custom-header-value');
        return _headers;
    };
    return HttpInterceptorService;
}());
HttpInterceptorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ivalidator_service_1.IValidatorService,
        iconfiguration_service_1.IConfigurationService])
], HttpInterceptorService);
exports.HttpInterceptorService = HttpInterceptorService;
//# sourceMappingURL=http.interceptor.service.js.map