const addInput = document.querySelector("#add-input");
const addButton = document.querySelector("#add-button");
const tasksSection = document.querySelector("section#tasks");

function addButtonClickHandler() {
    if (!addInput.value) {
        alert("please type a task .. ");
        return;
    }

    const taskInput = createTaskInput(addInput);
    const taskChekbox = createTaskCheckbox(taskInput);
    const closeButton = createCloseButton();
    const iconContainer = createIconContainer(taskInput, closeButton);
    const taskItem = createTaskItem(taskChekbox, taskInput, iconContainer);

    tasksSection.appendChild(taskItem);

    initializeCloseButtonEventListeners(closeButton, taskItem);

    addInput.value = "";
}

function createTaskItem(taskChekbox, taskInput, iconContainer) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    taskItem.style.animation = "add-task 1s";
    taskItem.appendChild(taskChekbox);
    taskItem.appendChild(taskInput);
    taskItem.appendChild(iconContainer);

    return taskItem;
}

function createTaskInput(addInput) {
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.readOnly = "true";

    taskInput.value = addInput.value;

    return taskInput;
}

function createTaskCheckbox(taskInput) {
    const taskChekbox = document.createElement("input");
    taskChekbox.type = "checkbox";

    taskChekbox.addEventListener("click", () => {
        if (taskChekbox.checked == true) {
            taskInput.classList.add("text-decoration");
        } else {
            taskInput.classList.remove("text-decoration");
        }
    });

    return taskChekbox;
}

function createEditButton(taskInput) {
    const editButton = document.createElement("button");
    editButton.classList.add("icon");
    editButton.innerHTML = `<i class="edit ri-edit-box-line"></i>`;

    editButton.addEventListener("click", () => {
        taskInput.readOnly = !taskInput.readOnly;

        if (!taskInput.readOnly) {
            editButton.innerHTML = `<i class="edit  ri-check-line"></i>`;
            taskInput.style.backgroundColor = "white";
        } else {
            editButton.innerHTML = `<i class="edit ri-edit-box-line"></i>`;
            taskInput.style.backgroundColor = "transparent";
        }
    });

    return editButton;
}

function createCloseButton() {
    const closeButton = document.createElement("button");
    closeButton.classList.add("icon");
    closeButton.innerHTML = `<i class="close ri-close-line"></i>`;

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
