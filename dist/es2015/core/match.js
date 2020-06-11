"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
const RulesValue_1 = require("./RulesValue");
function match(path) {
    return function (classConstructor) {
        const internalConstructor = classConstructor;
        internalConstructor.__rulesMatchPath = path;
        return class extends classConstructor {
            constructor(...args) {
                super();
                const thiz = this;
                for (const propertyName in thiz) {
                    const propertyValue = thiz[propertyName];
                    if (!propertyValue) {
                        continue;
                    }
                    if (propertyValue.__rulesPathVar) {
                        if (!propertyValue.__rulesPathVarName) {
                            thiz[propertyName].__rulesPathVarName = propertyName;
                        }
                    }
                    if (propertyValue instanceof RulesValue_1.RulesValue) {
                        propertyValue.__rulesAccessorName = propertyName;
                        propertyValue.__rulesAccessorContext = "resource.data";
                    }
                }
            }
        };
    };
}
exports.match = match;
//# sourceMappingURL=match.js.map