export {editProjectFunction};

function editProjectFunction(project, projectTitle) {
    project.title = prompt("Enter new title:");
    projectTitle.textContent = project.title;
}