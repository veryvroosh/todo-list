export {loadPageSkeleton, displayProjects, displayTasks, addProjectButton, taskListDiv, addTaskButton};
import {editProjectFunction, deleteProjectFunction, deleteTaskFunction, escapeStack, deselectProject} from "../Controller/eventListenerFunctions";
import {taskDialog} from "./addTaskDialog";
import {projectList} from "../Model/data";
import TodoAoiLogo from "../Assets/Icons/todo_aoi_logo.png";
import TodoListLogo from "../Assets/Icons/todo_list_logo.png";
import {appendChildren, createElement} from "../Controller/utils";

// general page html structure
const projectsDiv = createElement("div", "projects-div");
    const logoDiv = createElement("div", "logo-div");
        const todoLogo = createElement("img", "todo-logo");
        const todoListLogo = createElement("img", "todo-list-logo");
    const projectListDiv = createElement("div", "project-list-div");
    const addProjectButton = createElement("button", "add-project-button");

const tasksDiv = createElement("div", "tasks-div");
    const taskListDiv = createElement("div", "task-list-div");
    const addTaskButton = createElement("button", "add-task-button");


const taskDescDiv = createElement("div", "task-desc-div");

// adding attributes to the elements
todoLogo.src = TodoAoiLogo;
todoLogo.alt = "logo image";
todoListLogo.src = TodoListLogo;
todoListLogo.alt = "todo-list";
addProjectButton.textContent = "Add Project";
addTaskButton.textContent = "Add Task";

function loadPageSkeleton() {
    appendChildren(document.body, projectsDiv, tasksDiv, taskDescDiv);
    appendChildren(projectsDiv, logoDiv, projectListDiv, addProjectButton);
    appendChildren(logoDiv, todoLogo, todoListLogo);
    appendChildren(tasksDiv, taskDialog, taskListDiv, addTaskButton);
}

function displayProjects() {
    projectListDiv.innerHTML = "";
    projectList.forEach(project => {
        const projectCard = createElement("div", "", "project-card");
            const projectTitle = createElement("div", "", "project-title");
            const projectButtonsDiv = createElement("div", "", "project-buttons-div");
                const projectEditButton = createElement("button", "", "project-edit-button");
                const projectDeleteButton = createElement("button", "", "project-delete-button");


        projectTitle.textContent = `${project.projectTitle}`;

        appendChildren(projectCard, projectTitle, projectButtonsDiv);
        appendChildren(projectButtonsDiv, projectEditButton, projectDeleteButton);
        appendChildren(projectListDiv, projectCard);

        projectCard.addEventListener('click', () => displayTasks(project));
        projectEditButton.addEventListener('click', () => editProjectFunction(project, projectTitle));
        projectDeleteButton.addEventListener('click', () => deleteProjectFunction(project, projectCard));
    })
}

function displayTasks(project) {
    taskListDiv.innerHTML = "";
    addTaskButton.style.visibility = "visible";
    project.projectTasks.forEach(task => {
        const taskCard = createElement("div", "", "task-card");
            const taskTitleAndStatusDiv = createElement("div", "", "task-title-and-status-div");
                const taskStatusButton = createElement("button", "", "task-status-button");
                const taskTitle = createElement("div", "", "task-title");
            const taskButtonsDiv = createElement("div", "", "task-buttons-div");
                const editTaskButton = createElement("button", "", "edit-task-button");
                const deleteTaskButton = createElement("button", "", "delete-task-button");


        taskTitle.textContent = `${task.taskTitle}`

        appendChildren(taskCard, taskTitleAndStatusDiv, taskButtonsDiv);
        appendChildren(taskTitleAndStatusDiv, taskStatusButton, taskTitle);
        appendChildren(taskButtonsDiv, editTaskButton, deleteTaskButton);
        appendChildren(taskListDiv, taskCard);

        deleteTaskButton.addEventListener('click', () => deleteTaskFunction(project, task, taskCard));

        escapeStack.push(deselectProject)
    })
}