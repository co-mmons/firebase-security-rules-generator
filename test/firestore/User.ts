import {RulesMap, match, RulesPathVar, RulesString} from "firebase-security-rules-generator/firestore";

@match("users/{$id}")
export class User extends RulesMap<User> {

    id = new RulesString;

    private readonly $id = new RulesPathVar;

}
