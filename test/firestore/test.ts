require("tsconfig-paths/register");

import {firestore} from "@co.mmons/firestore-security-rules";
import {Admin} from "./Admin";
import {User} from "./User";

console.log(firestore(
    User,
    Admin
).toString());
