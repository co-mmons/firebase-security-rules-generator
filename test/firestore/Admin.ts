import {
    allow,
    equals,
    func,
    get,
    getData,
    match,
    or,
    request,
    RulesMap,
    RulesResource,
    RulesString
} from "firebase-security-rules-generator/firestore";
import {User} from "./User";

@match("admins/{$id}")
export class Admin extends RulesMap {

    @func()
    static isAdmin(test: number) {
        return new Admin().customerId;
    }

    user = new User;
    customerId = new RulesString;

    @func()
    passResource(user: RulesResource) {
        return user.data(User).id;
    }

    @func()
    getResource() {
        return this.passResource(get("users"));
    }

    @func()
    passResourceData(user: User) {
        return user.get("test");
    }

    @func()
    getResourceData() {
        return this.passResourceData(getData("users", User));
    }

    @func()
    getResourceTimestamp() {
        return request(this).time.date();
    }

    @func()
    private checkUserAlive(user: User, commit?: boolean) {
        return or(
            user.id.equals("eventtravelapps-admin"),
            this.user.id.equals("blah")
        );
    }

    @allow("read")
    private readByUser() {
        return equals(request(this).resource.data().customerId, this.customerId)
    }
}
