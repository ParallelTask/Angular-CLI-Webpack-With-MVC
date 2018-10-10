"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var home_component_1 = require("../home.component");
var home_child_route_1 = require("./home.child.route");
var earlyRoute = [{
        path: 'home',
        component: home_component_1.HomeComponent
    }];
exports.HomeEarlyRoute = lodash.merge(earlyRoute[0], home_child_route_1.HomeChildRoute[0]);
//# sourceMappingURL=home.early.route.js.map