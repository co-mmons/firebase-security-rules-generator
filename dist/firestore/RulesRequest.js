"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var tslib_1 = require("tslib");
var RulesExpression_1 = require("../core/RulesExpression");
var RulesValue_1 = require("./RulesValue");
var RulesMap_1 = require("./RulesMap");
var RulesRequestAuth_1 = require("./RulesRequestAuth");
var RulesResource_1 = require("./RulesResource");
var RulesString_1 = require("./RulesString");
var RulesTimestamp_1 = require("./RulesTimestamp");
function request(resourceData) {
    if (!resourceData) {
        resourceData = new RulesMap_1.RulesMap();
    }
    // @ts-ignore
    return new RulesRequestImpl(resourceData.__rulesClone());
}
exports.request = request;
var RulesRequestImpl = /** @class */ (function (_super) {
    tslib_1.__extends(RulesRequestImpl, _super);
    function RulesRequestImpl(data) {
        var _this = _super.call(this) || this;
        // @ts-ignore
        _this.auth = new RulesRequestAuth_1.RulesRequestAuth;
        _this.time = new RulesTimestamp_1.RulesTimestamp;
        /**
         * The request method. One of:
         * - get
         * - list
         * - create
         * - update
         * - delete
         *
         * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#method
         */
        _this.method = new RulesString_1.RulesString;
        _this.resource = new RulesResource_1.RulesResource(data);
        _this.__rulesInitProperties();
        _this.__rulesExpression = RulesExpression_1.RulesExpression.l(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["request"], ["request"])));
        return _this;
    }
    return RulesRequestImpl;
}(RulesValue_1.RulesValue));
var templateObject_1;
//# sourceMappingURL=RulesRequest.js.map