"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var about_component_1 = require("../about.component");
var about_child_route_1 = require("./about.child.route");
var earlyRoute = [{
        path: 'about',
        component: about_component_1.AboutComponent
    }];
exports.AboutEarlyRoute = lodash.merge(earlyRoute[0], about_child_route_1.AboutChildRoute[0]);
//# sourceMappingURL=about.early.route.js.map