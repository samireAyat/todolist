const addInput = document.getElementById("add-input");
const addBtn = document.getElementById("add-btn");
const taskSection = document.querySelector(".task-section");

let taskInput;
function addTaskItem() {
    if (!addInput.value) {
        alert("please type a task .. ");
    } else {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        const taskChekbox = document.createElement("input");
        taskChekbox.type = "checkbox";
        taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.readOnly = "true";
        const iconContainer = document.createElement("span");
        const editButton = document.createElement("button");
        editButton.classList.add("icon");
        editButton.innerHTML = `<i class="edit ri-edit-box-line"></i>`;
        const closeButton = document.createElement("button");
        closeButton.classList.add("icon");
        closeButton.innerHTML = `<i class="close ri-close-line"></i>`;

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

        closeButton.addEventListener("click", () => {
            taskItem.style.display = "none";
        });

        taskChekbox.addEventListener("click", () => {
            if (taskChekbox.checked == true) {
                taskInput.classList.add("text-decoration");
            } else {
                taskInput.classList.remove("text-decoration");
            }
        });

        taskInput.value = addInput.value;
        addInput.value = "";
        taskItem.style.animation = "add-task 1s";
        taskSection.appendChild(taskItem);
        taskItem.appendChild(taskChekbox);
        taskItem.appendChild(taskInput);
        taskItem.appendChild(iconContainer);
        iconContainer.appendChild(editButton);
        iconContainer.appendChild(closeButton);
    }
}

addBtn.addEventListener("click", addTaskItem);
