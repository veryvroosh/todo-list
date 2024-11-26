export {createProject, createTask};

class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.projectTasks = [];
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