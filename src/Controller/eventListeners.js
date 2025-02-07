import {addProjectButton, addTaskButton, taskEditButton, currentTask} from "../View/pageLoader";
import {createProject} from "../Model/data";
import {taskDialog} from "../View/addTaskDialog";
import {escapeStack, deselectTaskDialog, editTaskFunction} from "./eventListenerFunctions";

addProjectButton.addEventListener('click', () => {
    const newProjectName = prompt("Name of new project");
    createProject(newProjectName);
})

addTaskButton.addEventListener('click', () => {
    taskDialog.showModal();
    taskDialog.style.visibility = "visible";
    escapeStack.push(deselectTaskDialog);
});

taskEditButton.addEventListener('click', () => editTaskFunction(currentTask));
