"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UnauthorizedComponent = (function () {
    function UnauthorizedComponent() {
    }
    return UnauthorizedComponent;
}());
UnauthorizedComponent = __decorate([
    core_1.Component({
        selector: 'pt-hacker-unauthorized',
        template: "\n        <h2 class='alert'>Unauthorized Operation</h2>\n    ",
        styles: ["\n        .alert {\n            margin: 10px 5px;\n            font-family: Calibri;\n            color: red;\n        }\n    "]
    })
], UnauthorizedComponent);
exports.UnauthorizedComponent = UnauthorizedComponent;
//# sourceMappingURL=unauthorized.component.js.map