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
    variable, whenTrue
} from "firebase-security-rules-generator/firestore";

@match("users/{$id}")
export class User extends RulesMap {

    id = new RulesString;

    map = new RulesMap;

    private readonly $id = new RulesPathVar;

    @func()
    static testA(user: User) {
        const costam = variable(this, user);
        return costam.map.get("test").isNotNull();
    }

    @func()
    static testIfSuperuser(id: RulesString, aa?: number) {
        const costam2 = variable(this, equals(aa, 222));
        const costam3 = variable(this, RulesString.l`cośtam${costam2}`);
        return get(RulesPath.l`/customersAdmins/${id}:${costam3}`);
        // return equals(id.substring(0, 4).substring(0, 1), "admin");
    }

    @allow("read", "write")
    allowUser() {
        return and(
            this.$id.equals(auth().uid),
            User.testIfSuperuser(this.id.concat("argh"), 112)
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
