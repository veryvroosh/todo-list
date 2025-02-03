export {loadPageSkeleton, displayProjects, displayTasks, addProjectButton, taskListDiv, addTaskButton};
import {
    editProjectFunction,
    deleteProjectFunction,
    deleteTaskFunction,
    escapeStack,
    deselectProject
} from "../Controller/eventListenerFunctions";
import {projectList} from "../Model/data";
import TodoAoiLogo from "../Assets/Icons/todo_aoi_logo.png";

import TodoListLogo from "../Assets/Icons/todo_list_logo.png";
// general page html structure
const projectsDiv = document.createElement("div");
    const logoDiv = document.createElement("div");
        const todoLogo = document.createElement("img");
        const todoListLogo = document.createElement("img");
    const projectListDiv = document.createElement("div");
    const addProjectButton = document.createElement("button");

const tasksDiv = document.createElement("div");
    const taskListDiv = document.createElement("div");
    const addTaskButton = document.createElement("button");


const taskDescDiv = document.createElement("div");
// adding classes and attributes to the elements
projectsDiv.id = "projects-div";
logoDiv.id = "logo-div";
todoLogo.id = "todo-logo";
todoLogo.src = TodoAoiLogo;
todoLogo.alt = "logo image";
todoListLogo.id = "todo-list-logo";
todoListLogo.src = TodoListLogo;
todoListLogo.alt = "todo-list";
projectListDiv.id = "project-list-div";
addProjectButton.id = "add-project-button";
addProjectButton.textContent = "Add Project";
tasksDiv.id = "tasks-div";
taskListDiv.id = "task-list-div";
addTaskButton.id = "add-task-button";
addTaskButton.textContent = "Add Task";
taskDescDiv.id = "task-desc-div";

function loadPageSkeleton() {
    document.body.appendChild(projectsDiv);
    document.body.appendChild(tasksDiv);
    document.body.appendChild(taskDescDiv);

    projectsDiv.appendChild(logoDiv);
    logoDiv.appendChild(todoLogo);
    logoDiv.appendChild(todoListLogo);
    projectsDiv.appendChild(projectListDiv);
    projectsDiv.appendChild(addProjectButton);

    tasksDiv.appendChild(taskListDiv);
    tasksDiv.appendChild(addTaskButton);
}


function displayProjects() {
    projectListDiv.innerHTML = "";
    projectList.forEach(project => {
        const projectCard = document.createElement("div");
            const projectTitle = document.createElement("div");
            const projectButtonsDiv = document.createElement("div");
                const projectEditButton = document.createElement("button");
                const projectDeleteButton = document.createElement("button");

        projectCard.classList.add("project-card");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = `${project.projectTitle}`;
        projectButtonsDiv.classList.add("project-buttons-div");
        projectEditButton.classList.add("project-edit-button");
        projectDeleteButton.classList.add("project-delete-button");

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectButtonsDiv);
        projectButtonsDiv.appendChild(projectEditButton);
        projectButtonsDiv.appendChild(projectDeleteButton);

        projectListDiv.appendChild(projectCard);

        projectCard.addEventListener('click', () => displayTasks(project));
        projectEditButton.addEventListener('click', () => editProjectFunction(project, projectTitle));
        projectDeleteButton.addEventListener('click', () => deleteProjectFunction(project, projectCard));
    })
}

function displayTasks(project) {
    taskListDiv.innerHTML = "";
    addTaskButton.style.visibility = "visible";
    project.projectTasks.forEach(task => {
        const taskCard = document.createElement("div");
            const taskTitleAndStatusDiv = document.createElement("div");
                const taskStatusButton = document.createElement("button");
                const taskTitle = document.createElement("div");
            const taskButtonsDiv = document.createElement("div");
                const editTaskButton = document.createElement("button");
                const deleteTaskButton = document.createElement("button");

        taskCard.classList.add("task-card");
        taskTitleAndStatusDiv.classList.add("task-title-and-status-div");
        taskStatusButton.classList.add("task-status-button");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = `${task.taskTitle}`
        taskButtonsDiv.classList.add("task-buttons-div");
        editTaskButton.classList.add("edit-task-button")
        deleteTaskButton.classList.add("delete-task-button");

        taskCard.appendChild(taskTitleAndStatusDiv);
        taskTitleAndStatusDiv.appendChild(taskStatusButton);
        taskTitleAndStatusDiv.appendChild(taskTitle);
        taskCard.appendChild(taskButtonsDiv);
        taskButtonsDiv.appendChild(editTaskButton);
        taskButtonsDiv.appendChild(deleteTaskButton);

        taskListDiv.appendChild(taskCard);

        deleteTaskButton.addEventListener('click', () => deleteTaskFunction(project, task, taskCard));

        escapeStack.push(deselectProject)
    })
}

