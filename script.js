document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("todo-form");
  var input = document.getElementById("todo-input");
  var todoList = document.getElementById("todo-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var taskName = input.value;

    if (taskName !== "") {
      addTask(taskName);
      input.value = "";
    }
  });

  function addTask(taskName) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var deleteBtn = document.createElement("button");
    var writeBtn = document.createElement("button");

    span.textContent = taskName;

    writeBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    writeBtn.classList.add("todo-write-btn");

    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("todo-delete-btn");

    writeBtn.addEventListener("click", function () {
      li.classList.add("fix");
      deleteBtn.remove();
      writeBtn.remove();
    });

    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(writeBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  }
});
