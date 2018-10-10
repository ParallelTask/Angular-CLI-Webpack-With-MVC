"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var http_interceptor_service_1 = require("./http.interceptor.service");
exports.HttpInterceptorProviders = {
    IHttpInterceptorService: {
        // Register Http interceptor
        provide: http_1.HTTP_INTERCEPTORS,
        useClass: http_interceptor_service_1.HttpInterceptorService,
        multi: true
    }
};
//# sourceMappingURL=http.interceptor.providers.js.map