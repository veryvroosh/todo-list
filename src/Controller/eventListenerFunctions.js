export {editProjectFunction, deleteProjectFunction};

function editProjectFunction(project, projectTitle) {
    const newTitle = prompt("Enter new title:");
    project.editProjectTitle(newTitle);
    projectTitle.textContent = project.projectTitle;
}

function deleteProjectFunction(project, projectCard) {
    project.deleteProject();
    projectCard.remove();
}