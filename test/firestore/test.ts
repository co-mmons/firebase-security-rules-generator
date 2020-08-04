import {firestore} from "firebase-security-rules-generator/firestore";
import {Admin} from "./Admin";
import {User} from "./User";
import {standaloneFunctionTest} from "./standaloneFunctionTest";

const start = Date.now();

console.log(firestore(
    standaloneFunctionTest,
    User,
    Admin
).toString());

console.log("\x1b[32mFinished in", `${Date.now() - start}ms`);
