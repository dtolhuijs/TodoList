// select the element containing the count
var totalCount = document.getElementById('total-count');
// count the number of todo's by their class name
var totalTodos = document.getElementsByClassName("todo").length;
// update the HTML inside the counter element
totalCount.innerHTML = totalTodos;

function updateCounters() {
  // Total number of todos
  var totalCount = document.getElementById('total-count');
  var totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;
}

updateCounters();

function updateCounters() {
  // Total number of todos
  var totalCount = document.getElementById('total-count');
  var totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;

  // Total number of completed todos
  var completedCount = document.getElementById('completed-count');
  var completedTodos = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  // Total number of uncompleted todos
  var todoCount = document.getElementById('todo-count');
  var uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;
}

updateCounters();

function toggleDone() {
  var checkbox = this;

  // check the checked status of the checkbox
  if (checkbox.checked) {
    // the "completed" class should be set on the parent element, the <li>
    checkbox.parentElement.className = "todo completed";
  } else {
    checkbox.parentElement.className = "todo";
  }

  updateCounters();
}
