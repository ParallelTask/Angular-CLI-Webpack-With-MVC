"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var about_component_1 = require("../about.component");
var about_child_route_1 = require("./about.child.route");
var lazyRoute = [{
        path: '',
        component: about_component_1.AboutComponent
    }];
exports.AboutLazyRouterRoute = lodash.merge(lazyRoute, about_child_route_1.AboutChildRoute);
//# sourceMappingURL=about.lazy.router.route.js.map