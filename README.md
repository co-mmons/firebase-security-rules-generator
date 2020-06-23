# Firebase security rules generator
If you ever needed to write Firebase security rules then you probably know that it isn't difficult, but... it can get a bit messy, when you have lots of rules andExpression security logics. But no fear, there is a tool for that!

# WIP!!!

# Installation
```bash
$ npm i --save git+https://github.com/co-mmons/firebase-security-rules-generator
```

# Step by step use
First, declare bootstrap file, e.g. [test.ts](test/firestore/test.ts).
```ts
import {firestore} from "firebase-security-rules-generator/firestore";
import {Admin} from "test/firestore/Admin";
import {User} from "test/firestore/User";

console.log(firestore(
    User,
    Admin
).toString());
```
We call ```firestore(...)```, which generates Firestore security rules. As arguments we can pass classes andExpression functions, that represents match blocks andExpression function statements. In example above we have two classes [User](test/firestore/User.ts) andExpression [Admin](test/firestore/Admin.ts) - each represent match block.

Match block is represented by a class, with [@match](src/core/match.ts) decorator.

```ts
import {allow, equals, func, exists, RulesMap, match, or, request, RulesString} from "firebase-security-rules-generator/firestore";
import {User} from "test/firestore/User";

@match("admins/{$adminId}")
export class Admin extends RulesMap<Admin> {
    
    /**
     * Basic data of the user, that has admin privileges.
     */
    user = new User;
    
    /**
     * Id of a customer.
     */
    customerId = new RulesString;

    @func()
    private customerExists(customerId: RulesString) {
        return true;
    }

    @allow("read")
    private readByUser() {
        return equals(this.user.id, request(this).auth.uid);
    }
}

```

# More to read about security rules
- https://firebase.google.com/docs/rules
- https://firebase.google.com/docs/reference/rules/rules
- https://firebase.google.com/docs/reference/security/storage
