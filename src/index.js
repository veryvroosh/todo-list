import "./View/styles.css";
import {projectList, createProject} from "./Model/data";
import {loadPageSkeleton} from "./View/pageLoader";
import "./Controller/eventListeners";
import {escapeStack} from "./Controller/eventListenerFunctions";

window.addEventListener("DOMContentLoaded", () => {
    document.body.style.visibility = "visible";
});


function initApp () {
    createProject("Default");
    loadPageSkeleton();
    projectList[0].addTask("First Task", "HELLO GUYS WELCOME BACK TO LETS PLAY", "2025, 05, 23", "High");
}

document.addEventListener('keydown', (event) => {
    if(event.key === "Escape" && escapeStack.length > 0) {
        const func = escapeStack.pop();
        func();
    }
})

initApp();