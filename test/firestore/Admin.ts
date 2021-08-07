import {allow, equals, func, get, getData, match, or, request, resource, RulesMap, RulesResource, RulesResourceUnknownData, RulesString, variable} from "firebase-security-rules-generator/firestore";
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
    private passResource(user: RulesResourceUnknownData) {
        return user.data(User).id;
    }

    @func()
    private getResource() {
        return this.passResource(get("users"));
    }

    @func()
    private passResourceData(user: User) {
        return user.get("test");
    }

    @func()
    private getResourceData() {
        const variableTest = variable(this, this.passResourceData(getData("users", User)));
        return variableTest;
    }

    @func()
    private getResourceTimestamp() {
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
        return equals(resource(this).data().customerId, request(this).resource.data().customerId);
    }
}
