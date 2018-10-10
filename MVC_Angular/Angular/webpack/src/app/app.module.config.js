"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var utility_module_1 = require("./core/utility/utility.module");
var configuration_module_1 = require("./core/configuration/configuration.module");
var core_module_1 = require("./modules/core/core.module");
var app_router_module_1 = require("./app.router.module");
var shared_module_1 = require("./modules/shared/shared.module");
var http_interceptor_module_1 = require("./core/interceptors/http.interceptor.module");
var app_component_1 = require("./app.component");
var notfound_component_1 = require("./modules/shared/page-error/notfound.component");
var server_error_component_1 = require("./modules/shared/page-error/server.error.component");
var unauthorized_component_1 = require("./modules/shared/page-error/unauthorized.component");
var http_mock_module_1 = require("../lib/http_mock/http.mock.module");
var common_1 = require("@angular/common");
// #if global.lazyLoad.HomeModule !== true
var home_module_1 = require("./modules/home/home.module");
var home_component_1 = require("./modules/home/home.component");
// #endif
// #if global.lazyLoad.AboutModule !== true
var about_module_1 = require("./modules/about/about.module");
var about_component_1 = require("./modules/about/about.component");
// #endif
var imports = [
    platform_browser_1.BrowserModule,
    app_router_module_1.AppRouterModule,
    configuration_module_1.ConfigurationModule,
    utility_module_1.UtilityModule,
    core_module_1.CoreModule,
    shared_module_1.SharedModule
    // #if global.mockHttpRequests !== true
    ,
    http_interceptor_module_1.HttpInterceptorModule
    // #endif
    // #if global.mockHttpRequests === true
    ,
    http_mock_module_1.HttpMockModule
    // #endif
    // #if global.lazyLoad.HomeModule !== true
    ,
    home_module_1.HomeModule
    // #endif
    // #if global.lazyLoad.AboutModule !== true
    ,
    about_module_1.AboutModule
    // #endif
];
exports.AppModuleConfig = {
    declarations: [app_component_1.AppComponent],
    imports: imports,
    bootstrap: [app_component_1.AppComponent],
    providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
    entryComponents: [
        notfound_component_1.NotFoundComponent,
        server_error_component_1.ServerErrorComponent,
        unauthorized_component_1.UnauthorizedComponent
        // #if global.lazyLoad.HomeModule !== true
        ,
        home_component_1.HomeComponent
        // #endif
        // #if global.lazyLoad.AboutModule !== true
        ,
        about_component_1.AboutComponent
        // #endif
    ]
};
//# sourceMappingURL=app.module.config.js.map