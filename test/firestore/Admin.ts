import {allow, equals, Expression, func, match, or, request, RulesString} from "@co.mmons/firestore-security-rules";
import {User} from "./User";

@match("admins/{$id}")
export class Admin {

    user = new User;

    customerId = new RulesString;

    @func()
    checkUserAlive(user: User, commit?: boolean): Expression {
        return or(
            equals(user.id, "eventtravelapps-admin"),
            equals(this.user.id, "blah")
        )
        // return user.id ==
    }

    @allow()
    readByUser() {
        return equals(this.user.id, request(this).auth.uid) || this.checkUserAlive(this.user);
        // this.user.id -> resource.user.id
    }
}
