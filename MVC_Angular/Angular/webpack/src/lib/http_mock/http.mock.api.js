"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fixture_core_1 = require("../test_framework/fixture/fixture.core");
exports.HttpMockAPi = {
    get: {
        // Key is the RegEx to match, You can pass literal string or RegEx
        // When you perform get using
        // this.http.get(Customer/GetCustomerById/45)
        // following handler gets executed.
        'Customer/GetCustomerById/45': function (uri) {
            return fixture_core_1.Fixture.createRxObservable(fixture_core_1.Fixture.createStringMany());
        }
    },
    post: {
        'Customer/GetCustomerById/45': function (uri, data) {
            return fixture_core_1.Fixture.createRxObservable(fixture_core_1.Fixture.createStringMany());
        }
    }
};
//# sourceMappingURL=http.mock.api.js.map