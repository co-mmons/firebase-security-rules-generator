"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesResourceUnknownData = exports.RulesResourceKnownData = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesValue_1 = require("./RulesValue");
const RulesMap_1 = require("./RulesMap");
const RulesPath_1 = require("./RulesPath");
const RulesString_1 = require("./RulesString");
class RulesResourceKnownData extends RulesValue_1.RulesValue {
    constructor(data) {
        super();
        this.id = new RulesString_1.RulesString;
        this.__name__ = new RulesPath_1.RulesPath;
        this.$data = data.__rulesClone();
        this.$data.__rulesAccessorName = "data";
        this.$data.__rulesExpression = new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.data`);
    }
    data() {
        return this.$data;
    }
}
exports.RulesResourceKnownData = RulesResourceKnownData;
class RulesResourceUnknownData extends RulesValue_1.RulesValue {
    constructor() {
        super();
        this.id = new RulesString_1.RulesString;
        this.__name__ = new RulesPath_1.RulesPath;
    }
    data(dataType) {
        const data = dataType ? new dataType() : new RulesMap_1.RulesMap;
        data.__rulesAccessorName = "data";
        data.__rulesExpression = new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.data`);
        data.__rulesInitProperties();
        return data;
    }
}
exports.RulesResourceUnknownData = RulesResourceUnknownData;
//# sourceMappingURL=RulesResource.js.map