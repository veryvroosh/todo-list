export {loadPageSkeleton, displayProjects, addProjectButton};
import {editProjectFunction} from "../Controller/eventListenerFunctions";
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

        projectEditButton.addEventListener('click', () => editProjectFunction(project, projectTitle));
    })
}

/*TODO: inside the displayProjects foreach, you will call the displayTasks function
        with the specific number/name of the project in its parameter to display tasks and addTask
 */
