import {allow, and, auth, equals, func, match, RulesMap, RulesPathVar, RulesResource, RulesString} from "firebase-security-rules-generator/firestore";

@match("users/{$id}")
export class User extends RulesMap {

    id = new RulesString;

    private readonly $id = new RulesPathVar;

    @func()
    testIfSuperuser(id: RulesString) {
        return equals(id.substring(0, 4).substring(0, 1), "admin");
    }

    @allow("read", "write")
    allowUser() {
        return and(
            this.$id.equals(auth().uid),
            this.testIfSuperuser(this.id.concat("argh"))
        )
    }

}

export namespace User {
    export class Resource extends RulesResource {
        constructor() {
            super(new User);
        }
    }
}
