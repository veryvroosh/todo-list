import {addProjectButton} from "../View/pageLoader";
import {createProject} from "../Model/data";

addProjectButton.addEventListener('click', () => {
    const newProjectName = prompt("Name of new project");
    createProject(newProjectName);
})