"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    constructor() {
        this.nested = [];
    }
    match(match) {
        this.nested.push(match);
    }
}
exports.Match = Match;
/**
 * @nested(UserCustomer)
 * @match("users/{$id}")
 * class User extends Resource {
 *
 *     id: RulesString;
 *     projectId: RulesString | null;
 *     admin: CustomerAdmin;
 *     config: RulesMap;
 *
 *     private $id: PathParam;
 *
 *     @function
 *     protected checkPerms(res: SecurityMap<Project>) {
 *         return res.allowRead.isNull()
 *     }
 *
 *     @allow("update", "create")
 *     protected hshsd() {
 *         const project = get(projectPath(this.id.$$))
 *         const project = get(projectPath(), Project)
 *
 *         return or(
 *          this.id.equals(this.request.auth.uid),
 *          this.checkPerms(get(Project.path(this.id))),
 *          this.config.get("sdsd")
 *          );
 *
 *          return resource.data.id == request.auth.uid ||
 *          checkPerms(get(/databases/$(database)/documents/projects/$(resource.data.id)))
 *     }
 * }
 *
 *
 * firestore(
 *  User,
 *  Project,
 *  CustomerAdmin
 *  forms,
 *
 * )
 *
 *
 */
//# sourceMappingURL=Matchsss.js.map