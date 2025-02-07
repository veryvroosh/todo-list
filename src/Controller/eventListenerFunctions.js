import {appendChildren, createElement} from "./utils";

export {editProjectFunction, deleteProjectFunction, deleteTaskFunction, escapeStack, deselectProject, deselectTaskDialog, getSelectedPriority, submitTaskForm, cancelTaskForm, deselectTask, editTaskFunction};
import {
    taskListDiv,
    addTaskButton,
    currentProject,
    displayTasks,
    taskTitleDiv,
    taskDescDiv,
    taskDateDiv,
    taskPriorityDiv,
    taskTitleAndEditDiv,
    taskEditButton,
    taskDatePriorityDiv,
    taskInfoDiv,
    taskPriorityInputEdit,
    taskDateInputEdit,
    taskTitleInputEdit,
    taskDescInputEdit,
    taskTitleAndDoneDiv,
    taskEditDoneButton,
    taskDatePriorityDivEdit,
    taskEditWrapper,
    taskContentWrapper, displayTaskDesc, currentTask
} from "../View/pageLoader";
import {taskDateInput, taskDialog, taskForm, taskPriorityForm} from "../View/addTaskDialog";

const escapeStack = [];

function editProjectFunction(project, projectTitle) {
    event.stopPropagation();
    const newTitle = prompt("Enter new title:");
    project.editProjectTitle(newTitle);
    projectTitle.textContent = project.projectTitle;
}

function editTaskFunction(task) {
    taskPriorityInputEdit.innerHTML = "";
    const priorities = ["Low", "Medium", "High"];
    priorities.forEach((priority) => {
        const option = document.createElement("option");
        option.value = priority;
        option.textContent = priority;
        taskPriorityInputEdit.appendChild(option);
    });

    const dueDate = new Date(task.taskDueDate);
    if (!isNaN(dueDate)) { // Check if the date is valid
        taskDateInputEdit.value = dueDate.toISOString().split("T")[0];
    } else {
        taskDateInputEdit.value = ""; // Empty if invalid date
    }

    taskTitleInputEdit.value = task.taskTitle;
    taskDescInputEdit.value = task.taskDescription;
    taskPriorityInputEdit.value = task.taskPriority;
    taskDateInputEdit.type = "date";

    appendChildren(taskTitleAndDoneDiv, taskTitleInputEdit, taskEditDoneButton);
    appendChildren(taskDatePriorityDivEdit, taskPriorityInputEdit, taskDateInputEdit);

    appendChildren(taskEditWrapper, taskTitleAndDoneDiv, taskDescInputEdit, taskDatePriorityDivEdit);

    // Replace old content with new one
    taskInfoDiv.replaceChildren(taskEditWrapper);

    taskEditDoneButton.removeEventListener('click', doneEditTaskFunction);
    taskEditDoneButton.addEventListener('click', () => doneEditTaskFunction(task));

    if (!escapeStack.includes(deselectEditTask)) { // only push once
        escapeStack.push(deselectEditTask);
    }
}

function doneEditTaskFunction(task) {
    task.taskTitle = taskTitleInputEdit.value;
    task.taskDescription = taskDescInputEdit.value;
    task.taskPriority = taskPriorityInputEdit.value;
    task.taskDueDate = taskDateInputEdit.value;

    taskInfoDiv.replaceChildren(taskContentWrapper)
    displayTaskDesc(task);
}

function deselectEditTask() {
    taskInfoDiv.replaceChildren(taskContentWrapper);
    if (currentTask) displayTaskDesc(currentTask);
    // Remove all instances of deselectEditTask from the stack
    escapeStack.splice(escapeStack.lastIndexOf(deselectEditTask), 1);
}

function deleteProjectFunction(project, projectCard) {
    event.stopPropagation();
    project.projectTasks = [];
    deselectProject();
    project.deleteProject();
    projectCard.remove();
}

function deleteTaskFunction(project, task, taskCard) {
    event.stopPropagation();
    task.deleteTask(project);
    taskCard.remove();
}

function getSelectedPriority() {
    return taskPriorityForm.value;
}

function submitTaskForm(title, desc, date, priority) {
    currentProject.addTask(title, desc, date, priority);
    displayTasks(currentProject);
    taskForm.reset();
    taskDialog.close();
    taskDialog.style.visibility = "hidden";
}

function cancelTaskForm() {
    taskForm.reset();
    taskDialog.close();
    taskDialog.style.visibility = "hidden";
}

function deselectProject() {
    taskListDiv.innerHTML = "";
    addTaskButton.style.visibility = "hidden";
}

function deselectTaskDialog() {
    taskDialog.close();
    taskDialog.style.visibility = "hidden";
}

function deselectTask() {
    taskTitleAndEditDiv.innerHTML = "";
    taskDescDiv.innerHTML = "";
    taskDateDiv.innerHTML = "";
    taskPriorityDiv.innerHTML = "";
}
