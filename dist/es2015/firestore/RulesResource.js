"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesResource = void 0;
const RulesValue_1 = require("../core/RulesValue");
const RulesMap_1 = require("./RulesMap");
const RulesPath_1 = require("./RulesPath");
const RulesString_1 = require("./RulesString");
class RulesResource extends RulesValue_1.RulesValue {
    constructor(data = new RulesMap_1.RulesMap) {
        super();
        this.data = data;
        this.id = new RulesString_1.RulesString;
        this.__name__ = new RulesPath_1.RulesPath;
    }
}
exports.RulesResource = RulesResource;
//# sourceMappingURL=RulesResource.js.map