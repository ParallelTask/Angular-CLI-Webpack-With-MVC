"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var extensions_1 = require("../setup/extensions");
var Fixture = (function (_super) {
    __extends(Fixture, _super);
    function Fixture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fixture.createRxObservable = function (data) {
        return new Observable_1.Observable(function (observer) {
            observer.next(data);
        });
    };
    Fixture.createStringMany = function (count) {
        var loop = count === undefined ? Fixture._count : count;
        var _arr = [];
        for (var i = 0; i < loop; i++)
            _arr.push(Fixture.createString());
        return _arr;
    };
    Fixture.createBooleanMany = function (count) {
        var loop = count === undefined ? Fixture._count : count;
        var _arr = [];
        for (var i = 0; i < loop; i++)
            _arr.push(Fixture.createBoolean());
        return _arr;
    };
    Fixture.createNumberMany = function (count) {
        var loop = count === undefined ? Fixture._count : count;
        var _arr = [];
        for (var i = 0; i < loop; i++)
            _arr.push(Fixture.createNumber());
        return _arr;
    };
    Fixture.createIntegerMany = function (count) {
        var loop = count === undefined ? Fixture._count : count;
        var _arr = [];
        for (var i = 0; i < loop; i++)
            _arr.push(Fixture.createInteger());
        return _arr;
    };
    return Fixture;
}(extensions_1.Autofixture));
Fixture._count = 3;
exports.Fixture = Fixture;
//# sourceMappingURL=fixture.core.js.map