"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(id, name, description, formattedStartTime, formattedEndTime, userId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.formattedStartTime = formattedStartTime;
        this.formattedEndTime = formattedEndTime;
        this.userId = userId;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map