"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var home_component_1 = require("../home.component");
var home_child_route_1 = require("./home.child.route");
var lazyRoute = [{
        path: '',
        component: home_component_1.HomeComponent
    }];
exports.HomeLazyRouterRoute = lodash.merge(lazyRoute, home_child_route_1.HomeChildRoute);
//# sourceMappingURL=home.lazy.router.route.js.map