"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notfound_component_1 = require("./modules/shared/page-error/notfound.component");
var server_error_component_1 = require("./modules/shared/page-error/server.error.component");
var unauthorized_component_1 = require("./modules/shared/page-error/unauthorized.component");
// #if global.lazyLoad.AboutModule === true
var about_lazy_route_1 = require("./modules/about/setup/about.lazy.route");
// #endif
// #if global.lazyLoad.AboutModule !== true
var about_early_route_1 = require("./modules/about/setup/about.early.route");
// #endif
// #if global.lazyLoad.HomeModule === true
var home_lazy_route_1 = require("./modules/home/setup/home.lazy.route");
// #endif
// #if global.lazyLoad.HomeModule !== true
var home_early_route_1 = require("./modules/home/setup/home.early.route");
// #endif
var homeRoute = {};
var aboutRoute = {};
// #if global.lazyLoad.HomeModule !== true
homeRoute = home_early_route_1.HomeEarlyRoute;
// #endif
// #if global.lazyLoad.HomeModule === true
homeRoute = home_lazy_route_1.HomeLazyRoute;
// #endif
// #if global.lazyLoad.AboutModule !== true
aboutRoute = about_early_route_1.AboutEarlyRoute;
// #endif
// #if global.lazyLoad.AboutModule === true
aboutRoute = about_lazy_route_1.AboutLazyRoute;
// #endif
exports.AppRouteStates = {
    index: {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    about: aboutRoute,
    home: homeRoute,
    pageNotFound: {
        path: '**',
        component: notfound_component_1.NotFoundComponent
    },
    unauthorized: {
        path: 'unauthorized',
        component: unauthorized_component_1.UnauthorizedComponent
    },
    serverError: {
        path: 'server-error',
        component: server_error_component_1.ServerErrorComponent
    },
    pageUnfound: {
        path: 'page-not-found',
        component: notfound_component_1.NotFoundComponent
    }
};
//# sourceMappingURL=app.routes.js.map