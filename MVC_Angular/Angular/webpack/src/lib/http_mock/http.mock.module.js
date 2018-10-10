"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var http_client_mock_1 = require("./http.client.mock");
var HttpMockModule = (function () {
    function HttpMockModule() {
    }
    return HttpMockModule;
}());
HttpMockModule = __decorate([
    core_1.NgModule({
        providers: [
            {
                provide: http_1.HttpClient,
                useFactory: function () {
                    return http_client_mock_1.HttpClientMock.object();
                }
            }
        ]
    })
], HttpMockModule);
exports.HttpMockModule = HttpMockModule;
//# sourceMappingURL=http.mock.module.js.map