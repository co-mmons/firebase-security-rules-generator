import { RulesExpression } from "../core/RulesExpression";
import { RulesService } from "../core/RulesService";
import { Type } from "../utils";
export declare function firestore(...declarations: Array<Type<any> | RulesExpression>): RulesService;
