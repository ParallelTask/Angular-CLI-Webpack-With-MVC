"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var iabout_service_1 = require("./iabout.service");
var AboutComponent = (function () {
    function AboutComponent(aboutService) {
        this.aboutService = aboutService;
        this.nlClicks = 0;
        this.rxClicks = 0;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.email = this.aboutService.getContactEmail();
    };
    AboutComponent.prototype.getCustomer = function () {
        var _this = this;
        this.aboutService
            .getCustomerById(45)
            .subscribe(function (x) { return _this.httpData = x.join(); });
    };
    AboutComponent.prototype.getCustomerNotFound = function () {
        var _this = this;
        this.aboutService
            .getCustomerById(46)
            .subscribe(function (x) { return _this.httpData = x.join(); });
    };
    /**
     * Rxjs Way of adding button clicks
     * @param event Observable<MouseEvent>
     */
    AboutComponent.prototype.rxClick = function (event) {
        var _this = this;
        event.scan(function (count) { return count + 1; }, 0)
            .subscribe(function (count) {
            _this.rxClicks = count;
        });
        // Capturing only the altkeys
        // e.filter(x => x.altKey).subscribe(x => {
        //   console.log(x);
        // });
    };
    /**
     *  Normal way of adding button clicks
     */
    AboutComponent.prototype.nlClick = function () {
        this.nlClicks++;
    };
    AboutComponent.prototype.runMe = function () {
        this.email = 'dummy@example.com';
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'pt-hacker-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    }),
    __metadata("design:paramtypes", [iabout_service_1.IAboutService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map