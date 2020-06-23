import {allow, equals, func, getData, match, or, request, RulesMap, RulesString} from "firebase-security-rules-generator/firestore";
import {User} from "./User";

@match("admins/{$id}")
export class Admin extends RulesMap {

    user = new User;
    customerId = new RulesString;

    @func()
    passResource(user: User) {
        return user.isNotNull();
    }

    @func()
    getResource() {
        return this.passResource(getData("users", User));
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
        return or(
            equals(this.user.id, request(this).auth.uid),
            equals(request(this).resource.data.customerId, this.customerId),
            this.checkUserAlive(this.user, false)
        );
    }
}
