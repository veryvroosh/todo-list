export {editProjectFunction, deleteProjectFunction};

function editProjectFunction(project, projectTitle) {
    event.stopPropagation();
    const newTitle = prompt("Enter new title:");
    project.editProjectTitle(newTitle);
    projectTitle.textContent = project.projectTitle;
}

function deleteProjectFunction(project, projectCard) {
    event.stopPropagation();
    project.deleteProject();
    projectCard.remove();
}