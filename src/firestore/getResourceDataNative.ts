import {RulesExpression} from "../core/RulesExpression";

export const getResourceDataNative = RulesExpression.l`function __getResourceData(resource) {
    return resource != null ? resource.data : null;
}`;
