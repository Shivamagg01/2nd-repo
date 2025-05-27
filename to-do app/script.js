document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    // ✅ Completed button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.classList.add("complete-btn");
    completeBtn.onclick = () => {
      span.classList.toggle("completed"); // Toggle a CSS class
    };

    // ✏️ Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = () => editTask(span);

    // ❌ Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
  }
}

function editTask(span) {
  const currentText = span.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;

  span.replaceWith(input);
  input.focus();

  input.addEventListener("blur", () => {
    span.textContent = input.value.trim() || currentText;
    input.replaceWith(span);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      span.textContent = input.value.trim() || currentText;
      input.replaceWith(span);
    }
  });
}
