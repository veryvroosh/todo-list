export {projectList, createProject};
import {displayProjects, displayTasks} from "../View/pageLoader";

let projectList = [];

class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.projectTasks = [];
    }

    addTask (title, description, dueDate, priority) {
        let task = new Task(title,
            description || "",
            dueDate || "No date found",
            priority);
        this.projectTasks.push(task);
        displayTasks();
        return task;
    }

     editProjectTitle(title) {
        this.projectTitle = title;
    }

    deleteProject() {
        projectList = projectList.filter(item => item !== this);
    }
}

function createProject (projectTitle) {
    let project = new Project(projectTitle)
    projectList.push(project);
    displayProjects();
    return project;
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.taskTitle = title;
        this.taskDescription = description;
        this.taskDueDate = dueDate;
        this.taskPriority = priority;
    }

    editTitle(name) {
        this.taskTitle = name;
    }

    editDescription(description) {
        this.taskDescription = description;
    }

    editDueDate(date) {
        this.taskDueDate = date;
    }

    editPriority(priority) {
        this.taskPiority = priority;
    }

    deleteTask (project) {
        project.projectTasks = project.projectTasks.filter(item => item !== this);
    }
}
