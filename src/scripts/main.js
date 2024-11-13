const addInput = document.querySelector("#add-input");
const addButton = document.querySelector("#add-button");
const tasksSection = document.querySelector("section#tasks");

function addButtonClickHandler() {
    if (!addInput.value) {
        alert("please type a task .. ");
        return;
    }

    const taskInput = createTaskInput(addInput);
    const taskCheckbox = createTaskCheckbox();
    const closeButton = createCloseButton();
    const iconContainer = createIconContainer(taskInput, closeButton);
    const taskItem = createTaskItem(taskCheckbox, taskInput, iconContainer);

    tasksSection.appendChild(taskItem);

    initializeCloseButtonEventListeners(closeButton, taskItem);

    addInput.value = "";
}

function createTaskItem(taskCheckbox, taskInput, iconContainer) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    taskItem.style.animation = "add-task 1s";
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskInput);
    taskItem.appendChild(iconContainer);

    return taskItem;
}

function createTaskInput(addInput) {
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.readOnly = true;

    taskInput.value = addInput.value;

    return taskInput;
}

function createTaskCheckbox() {
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";

    return taskCheckbox;
}

function createEditButton(taskInput) {
    const editButton = document.createElement("button");
    editButton.innerHTML = `<span class="icon edit ri-edit-box-line"></span>`;

    editButton.addEventListener("click", () => {
        taskInput.readOnly = !taskInput.readOnly;

        if (!taskInput.readOnly) {
            editButton.innerHTML = `<span class="icon edit  ri-check-line"></span>`;
            taskInput.style.backgroundColor = "white";
        } else {
            editButton.innerHTML = `<span class="icon edit ri-edit-box-line"></span>`;
            taskInput.style.backgroundColor = "transparent";
        }
    });

    return editButton;
}

function createCloseButton() {
    const closeButton = document.createElement("button");
    closeButton.innerHTML = `<span class="icon close ri-close-line"></span>`;

    return closeButton;
}

function initializeCloseButtonEventListeners(closeButton, taskItem) {
    closeButton.addEventListener("click", () => {
        taskItem.style.display = "none";
    });
}

function createIconContainer(taskInput, closeButton) {
    const editButton = createEditButton(taskInput);

    const iconContainer = document.createElement("span");

    iconContainer.appendChild(editButton);
    iconContainer.appendChild(closeButton);

    return iconContainer;
}

addButton.addEventListener("click", addButtonClickHandler);
