"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import most commmonly used modules, such that these modules can be cached in vendor.ts
require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/common/http");
require("@angular/router");
// Dont just import all modules that increases bundle size
// import '@angular/platform-browser-dynamic';
// import '@angular/animations';
// import the modules that cannot be imported by individual modules
// lodash, momemt cannot be loaded by modules
// However primeng, rxjs can be loaded by modules
// import 'rxjs';
require("moment");
require("lodash");
// import 'primeng/primeng';
require("immutable");
// Global style
require("./assets/styles/custom.scss");
// Import external bundles ex: bootstrap, font-awesome
// To import externals, set "externalLoader": "bundle" in webpack.build.config.js
// When "externalLoader" : "cdn | local", comment out the external imports
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
//# sourceMappingURL=vendor.js.map