import {
    allow,
    and,
    auth,
    equals,
    func, get,
    match,
    RulesMap,
    RulesPath,
    RulesPathVar,
    RulesResource,
    RulesString,
    variable
} from "firebase-security-rules-generator/firestore";

@match("users/{$id}")
export class User extends RulesMap {

    id = new RulesString;

    private readonly $id = new RulesPathVar;

    @func()
    testA(id: RulesString) {
        const costam = variable(this, id);
        return costam.isNotNull();
    }

    @func()
    testIfSuperuser(id: RulesString, aa?: number) {
        const costam = variable(this, this.id);
        const costam2 = variable(this, equals(aa, 222));
        return get(RulesPath.l`/customersAdmins/${id}:${costam2}`);
        // return equals(id.substring(0, 4).substring(0, 1), "admin");
    }

    @allow("read", "write")
    allowUser() {
        return and(
            this.$id.equals(auth().uid),
            this.testIfSuperuser(this.id.concat("argh"), 112)
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
