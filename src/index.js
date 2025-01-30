import "./View/styles.css";
import {projectList, createProject} from "./Model/data";

window.addEventListener("DOMContentLoaded", () => {
    document.body.style.visibility = "visible";
});


function initApp () {
    projectList.push(createProject("Default"));
    console.log(projectList);
}



initApp();