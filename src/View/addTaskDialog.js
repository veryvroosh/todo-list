export {taskDialog, taskForm, taskDescInput, taskPriorityForm, taskDateInput};
import {createElement, appendChildren, linkLabelToInput} from "../Controller/utils";
import {getSelectedPriority, submitTaskForm, cancelTaskForm} from "../Controller/eventListenerFunctions";

const taskDialog = createElement("dialog", "add-task-dialog");
    const taskDialogTitle = createElement("p", "task-dialog-title");
    const taskForm = createElement("form", "task-form");
        const taskTitleForm = createElement("div", "task-title-form");
            const taskTitleLabel = createElement("label", "task-title-label");
            const taskTitleInput = createElement("input", "task-title-input");
        const taskDescForm = createElement("div", "task-desc-form");
            const taskDescLabel = createElement("label", "task-desc-label");
            const taskDescInput = createElement("textarea", "task-desc-input");
        const taskPriorityDateFormDiv = createElement("div", "task-priority-date-form-div");
            const taskPriorityForm = createElement("div", "task-priority-form");
            const taskDateForm = createElement("div", "task-date-form");
                const taskDateLabel = createElement("label", "task-date-label");
                const taskDateInput = createElement("input", "task-date-input");
        const taskDialogButtons = createElement("div", "task-dialog-buttons");
            const taskSubmitButton = createElement("button", "task-submit-button");
            const taskCancelButton = createElement("button", "task-cancel-button");


taskDialogTitle.textContent = "Add Task";

appendChildren(taskDialog, taskDialogTitle, taskForm);
appendChildren(taskForm, taskTitleForm, taskDescForm, taskPriorityDateFormDiv, taskDialogButtons);
appendChildren(taskTitleForm, taskTitleLabel, taskTitleInput);
appendChildren(taskDescForm, taskDescLabel, taskDescInput);
appendChildren(taskPriorityDateFormDiv, taskPriorityForm, taskDateForm);
appendChildren(taskPriorityForm);
appendChildren(taskDateForm, taskDateLabel, taskDateInput);
appendChildren(taskDialogButtons, taskSubmitButton, taskCancelButton);

linkLabelToInput(taskTitleLabel, taskTitleInput, "task-title-input");
linkLabelToInput(taskDescLabel, taskDescInput, "task-desc-input");
linkLabelToInput(taskDateLabel, taskDateInput, "task-date-input");

taskTitleLabel.textContent = "Task Title (*)";
taskDescLabel.textContent = "Description";
taskDateLabel.textContent = "Due Date";
taskSubmitButton.textContent = "Submit";
taskCancelButton.textContent = "Cancel";

const priorities = ["Low", "Medium", "High"];
priorities.forEach(priority => {
    const radioWrapper = createElement("div", "", "radio-wrapper");
    const radioInput = createElement("input", "", "task-priority-input");
    const radioLabel = createElement("label", "", "task-priority-label");

    radioInput.type = "radio";
    radioInput.name = "task-priority"; // same name groups them together
    radioInput.id = `priority-${priority.toLowerCase()}`;
    radioInput.value = priority.toLowerCase();

    if (priority === "Medium") radioInput.checked = true;

    radioLabel.htmlFor = radioInput.id;
    radioLabel.textContent = priority;

    appendChildren(radioWrapper, radioInput, radioLabel);
    taskPriorityForm.appendChild(radioWrapper);
});

taskDateInput.type = "date";

taskSubmitButton.type = "button";
taskCancelButton.type = "button";
taskSubmitButton.addEventListener('click', () => submitTaskForm(taskTitleInput.value, taskDescInput.value, taskDateInput.value, getSelectedPriority()));
taskCancelButton.addEventListener('click', () => cancelTaskForm())