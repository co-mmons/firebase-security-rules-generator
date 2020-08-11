"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesResource = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesValue_1 = require("./RulesValue");
const RulesMap_1 = require("./RulesMap");
const RulesPath_1 = require("./RulesPath");
const RulesString_1 = require("./RulesString");
class RulesResource extends RulesValue_1.RulesValue {
    constructor($data = new RulesMap_1.RulesMap) {
        super();
        this.$data = $data;
        this.id = new RulesString_1.RulesString;
        this.__name__ = new RulesPath_1.RulesPath;
    }
    data(dataType) {
        this.$data.__rulesAccessorName = "data";
        if (!dataType) {
            return this.$data;
        }
        else {
            const data = new dataType();
            data.__rulesExpression = new RulesExpression_1.RulesExpression(this, RulesExpression_1.RulesExpression.l `.data`);
            return data;
        }
    }
}
exports.RulesResource = RulesResource;
//# sourceMappingURL=RulesResource.js.map