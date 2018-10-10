"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var home_component_1 = require("../home.component");
// #if global.lazyLoad.HomeModule === true
var home_lazy_router_route_1 = require("./home.lazy.router.route");
// #endif
var imports = [
    common_1.CommonModule
    // #if global.lazyLoad.HomeModule === true
    ,
    router_1.RouterModule.forChild(home_lazy_router_route_1.HomeLazyRouterRoute)
    // #endif
];
exports.HomeConfig = {
    imports: imports,
    declarations: [
        home_component_1.HomeComponent
    ],
    exports: [
        home_component_1.HomeComponent
    ],
    providers: []
};
//# sourceMappingURL=home.config.js.map