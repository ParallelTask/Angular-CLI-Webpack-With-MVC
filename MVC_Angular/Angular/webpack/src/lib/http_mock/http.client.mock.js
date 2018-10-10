"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-implicit-dependencies
var moq_ts_1 = require("moq.ts");
var http_mock_api_1 = require("./http.mock.api");
exports.HttpClientMock = new moq_ts_1.Mock()
    .setup(function (x) { return x.get; })
    .returns(function (uri) {
    for (var prop in http_mock_api_1.HttpMockAPi.get) {
        if (new RegExp(prop).test(uri) === true) {
            return http_mock_api_1.HttpMockAPi.get[prop](uri);
        }
    }
    throw new Error("MockHttpApi says GET '" + uri + "' not found - 404");
})
    .setup(function (x) { return x.post; })
    .returns(function (uri, data) {
    for (var prop in http_mock_api_1.HttpMockAPi.post) {
        if (new RegExp(prop).test(uri) === true) {
            return http_mock_api_1.HttpMockAPi.post[prop](uri, data);
        }
    }
    throw new Error("MockHttpApi says POST '" + uri + "' not found - 404");
});
//# sourceMappingURL=http.client.mock.js.map