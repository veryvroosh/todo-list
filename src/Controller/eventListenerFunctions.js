export {editProjectFunction, deleteProjectFunction, deleteTaskFunction};
import {taskListDiv, addTaskButton} from "../View/pageLoader";

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

function deselectProject() {
    taskListDiv.innerHTML = "";
    addTaskButton.style.visibility = "hidden";
}

function deleteTaskFunction(project, task, taskCard) {
    event.stopPropagation();
    task.deleteTask(project);
    taskCard.remove();
}