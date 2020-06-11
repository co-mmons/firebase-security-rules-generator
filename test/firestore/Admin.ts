import {allow, equals, func, RulesMap, match, or, request, RulesString} from "firebase-security-rules-generator/firestore";
import {User} from "./User";

@match("admins/{$id}")
export class Admin extends RulesMap<Admin> {

    user = new User;

    customerId = new RulesString;

    @func()
    private checkUserAlive(user: User, commit?: boolean) {
        return or(
                equals(user.id, "eventtravelapps-admin"),
                equals(this.user.id, "blah")
            )
    }

    @allow("read")
    private readByUser() {
        return or(
            equals(this.user.id, request(this).auth.uid),
            equals(request(this).resource.data.user, this.customerId),
            this.checkUserAlive(this.user, false)
        );
    }
}
