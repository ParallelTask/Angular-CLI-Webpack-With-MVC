"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_configuration_1 = require("../../app.configuration");
var TimeIntercept = (function () {
    function TimeIntercept() {
    }
    TimeIntercept.TimeInterceptor = function (className, methodName) {
        // tslint:disable-next-line:only-arrow-functions
        return function (target, key, descriptor) {
            return {
                value: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (app_configuration_1.AppConfiguration.enableTimeInterceptor) {
                        descriptor.value = descriptor.value;
                        console.log("execution started class : " + className + " and method : " + methodName);
                        // tslint:disable-next-line:no-invalid-this
                        var result = descriptor.value.apply(this, args);
                        console.log("execution ended class : " + className + " and method : " + methodName);
                        return result;
                    }
                    else {
                        // tslint:disable-next-line:no-invalid-this
                        return descriptor.value.apply(this, args);
                    }
                }
            };
        };
    };
    return TimeIntercept;
}());
exports.TimeIntercept = TimeIntercept;
//# sourceMappingURL=time.intercept.js.map