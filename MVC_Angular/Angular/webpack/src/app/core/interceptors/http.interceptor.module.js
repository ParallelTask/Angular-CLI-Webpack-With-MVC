"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_interceptor_providers_1 = require("./http.interceptor.providers");
var http_1 = require("@angular/common/http");
var HttpInterceptorModule = (function () {
    function HttpInterceptorModule() {
    }
    return HttpInterceptorModule;
}());
HttpInterceptorModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpClientModule
        ],
        providers: [
            http_interceptor_providers_1.HttpInterceptorProviders.IHttpInterceptorService
        ]
    })
], HttpInterceptorModule);
exports.HttpInterceptorModule = HttpInterceptorModule;
//# sourceMappingURL=http.interceptor.module.js.map