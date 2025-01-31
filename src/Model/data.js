export {projectList, createProject};
import {displayProjects} from "../View/pageLoader";

let projectList = [];

class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.projectTasks = [];
    }

    addTask (title, description, dueDate, priority) {
        this.projectTasks.push(new Task(title,
            description || "",
            dueDate || "No date found",
            priority));
    }

     editProjectName(name) {
        this.projectName = name;
    }

    deleteProject() {
        projectList = projectList.filter(item => item !== this);
        console.log(projectList);
    }
}

function createProject (listName) {
    let project = new Project(listName)
    projectList.push(project);
    displayProjects();
    return project;
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    editTitle(name) {
        this.title = name;
    }

    editDescription(description) {
        this.description = description;
    }

    editDueDate(date) {
        this.dueDate = date;
    }

    editPriority(priority) {
        this.priority = priority;
    }

    deleteTask (project) {
        project.projectTasks = project.projectTasks.filter(item => item !== this);
    }
}
