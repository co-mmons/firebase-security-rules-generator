import {firestore} from "firebase-security-rules-generator/firestore";
import {Admin} from "./Admin";
import {User} from "./User";


const start = Date.now();

const output = firestore(
    User,
    Admin
).toString();

console.log(output);

console.log("\x1b[32mFinished in", `${Date.now() - start}ms`);