import "./View/styles.css";
import {projectList, createProject, createTask} from "./Model/data";


// const task1 = createTask("Workout", "Say whaaa", "2013", "Normal");
//
// console.log(task1);
// console.log(task1.title);


function initApp () {
    projectList.push(createProject("Default"));
    console.log(projectList);
}

initApp();