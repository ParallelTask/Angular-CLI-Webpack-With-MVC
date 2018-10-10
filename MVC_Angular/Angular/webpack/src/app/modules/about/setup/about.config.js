"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var about_component_1 = require("../about.component");
var about_providers_1 = require("./about.providers");
// Added to test observables working
var observables_module_1 = require("../../../../lib/observables/observables.module");
// #if global.lazyLoad.AboutModule === true
var about_lazy_router_route_1 = require("./about.lazy.router.route");
// #endif
var imports = [
    common_1.CommonModule,
    observables_module_1.ObservablesModule
    // #if global.lazyLoad.AboutModule === true
    ,
    router_1.RouterModule.forChild(about_lazy_router_route_1.AboutLazyRouterRoute)
    // #endif
];
exports.AboutConfig = {
    imports: imports,
    declarations: [
        about_component_1.AboutComponent
    ],
    exports: [
        about_component_1.AboutComponent
    ],
    providers: [
        about_providers_1.AboutProviders.IAboutService
    ]
};
//# sourceMappingURL=about.config.js.map