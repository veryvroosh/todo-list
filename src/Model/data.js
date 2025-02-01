export {projectList, createProject};
import {displayProjects} from "../View/pageLoader";

let projectList = [];

class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.projectTasks = [];
    }

    addTask (title, description, dueDate, priority) {
        this.projectTasks.push(new Task(title,
            description || "",
            dueDate || "No date found",
            priority));
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
