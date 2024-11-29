export {projectList, createProject, createTask};

let projectList = [];

class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.projectTasks = [];
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
    return new Project(listName);
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

function createTask (title, description, dueDate, priority) {
    return new Task(
        title,
        description || "",
        dueDate || "No date found",
        priority
    );
}

//TODO: delete task, edit task, delete project, modify name of project