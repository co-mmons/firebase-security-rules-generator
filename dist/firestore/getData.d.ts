import { AssignableType } from "../utils/Type";
import { RulesMap } from "./RulesMap";
import { RulesPath } from "./RulesPath";
export declare function getData<D extends RulesMap>(path: RulesPath | string, dataType: AssignableType<D>): D;
