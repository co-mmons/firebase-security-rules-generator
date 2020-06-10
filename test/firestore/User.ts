import {match, RulesMap, RulesPathVar, RulesString} from "@co.mmons/firestore-security-rules";

@match("users/{$id}")
export class User extends RulesMap<User> {

    id = new RulesString;

    private readonly $id = new RulesPathVar;



}
