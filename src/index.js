import "./View/styles.css";
import {projectList, createProject} from "./Model/data";
import {loadPageSkeleton} from "./View/pageLoader";

window.addEventListener("DOMContentLoaded", () => {
    document.body.style.visibility = "visible";
});


function initApp () {
    createProject("Default");
    loadPageSkeleton();
    console.log(projectList);
}



initApp();