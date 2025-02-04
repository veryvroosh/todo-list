export {taskDialog};
import {createElement} from "../Controller/utils";

const taskDialog = createElement("dialog", "add-task-dialog");
    const taskDialogTitle = createElement("p", "task-dialog-title");
    const taskForm = createElement("form", "task-form");
        const taskTitleForm = createElement("div", "task-title-form");
        const taskDescForm = createElement("div", "task-desc-form");
        const taskPriorityAndDateForm = createElement("div", "task-desc-form");


