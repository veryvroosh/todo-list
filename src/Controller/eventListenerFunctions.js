export {editProjectFunction, deleteProjectFunction, deleteTaskFunction, escapeStack, deselectProject, deselectTaskDialog, getSelectedPriority, submitTaskForm, cancelTaskForm};
import {taskListDiv, addTaskButton, currentProject, displayTasks} from "../View/pageLoader";
import {taskDialog, taskForm, taskPriorityForm} from "../View/addTaskDialog";

const escapeStack = [];

function editProjectFunction(project, projectTitle) {
    event.stopPropagation();
    const newTitle = prompt("Enter new title:");
    project.editProjectTitle(newTitle);
    projectTitle.textContent = project.projectTitle;
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
    return taskPriorityForm.querySelector('input[name="task-priority"]:checked')?.value;
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
