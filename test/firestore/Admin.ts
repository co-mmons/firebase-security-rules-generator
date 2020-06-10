import {allow, equals, Expression, func, match, request, RulesString} from "@co.mmons/firestore-security-rules";
import {User} from "./User";

@match("admins/{$id}")
export class Admin {

    user = new User;

    customerId = new RulesString;

    @func("user")
    checkUserAlive(user: User): Expression {
        return equals(user.id, "eventtravelapps-admin");
        // return user.id ==
    }

    @allow()
    readByUser() {
        return equals(this.user.id, request(this).auth.uid) || this.checkUserAlive(this.user);
        // this.user.id -> resource.user.id
    }
}
