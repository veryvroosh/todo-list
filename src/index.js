import "./View/styles.css";
import {projectList, createProject} from "./Model/data";
import {loadPageSkeleton} from "./View/pageLoader";
import "./Controller/eventListeners";

window.addEventListener("DOMContentLoaded", () => {
    document.body.style.visibility = "visible";
});


function initApp () {
    createProject("Default");
    loadPageSkeleton();
    console.log(projectList);
    projectList[0].addTask("First Task");
}



initApp();