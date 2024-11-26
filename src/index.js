import "./View/styles.css";
import {createProject, createTask} from "./Model/data";


// const task1 = createTask("Workout", "Say whaaa", "2013", "Normal");
//
// console.log(task1);
// console.log(task1.title);


function initApp () {
    let lists = [];
    lists.push(createProject("Default"));


    console.log(lists);
}

initApp();