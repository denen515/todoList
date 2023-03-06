//selectors
const todoInputActivity = document.querySelector(".activity");
const todoInputDate = document.querySelector(".date");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event-Listener
// function name(params) {

// }
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);

//function
function addTodo(event) {
	//prevent form from submitting
	event.preventDefault();
	// console.log("Hello");
	//TODO DIV
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	//Create LI
	const newTodo = document.createElement("li");
	// newTodo.innerHTML =
	// 	'<p class = "for-activity"></p><p class = "for-date"></p>';
	//Create P and attach to li
	const forActivity = document.createElement("p");
	forActivity.classList.add("for-activity");
	forActivity.innerHTML = todoInputActivity.value;
	const forDate = document.createElement("p");
	forDate.classList.add("for-date");
	forDate.innerHTML = todoInputDate.value;
	//Attach to Li
	newTodo.appendChild(forActivity);
	newTodo.appendChild(forDate);
	//TODO CLASSLIST
	newTodo.classList.add("todo-item");
	//attach to the div
	todoDiv.appendChild(newTodo);
	//DELETE BUTTON
	const deleteButton = document.createElement("button");
	deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
	deleteButton.classList.add("delete-btn");
	//attach to the div
	todoDiv.appendChild(deleteButton);
	//APPEND TO LIST
	todoList.appendChild(todoDiv);
	//CLEAR SCREEN OF INPUT VALUE AFTER USE
	todoInputActivity.value = "";
	todoInputDate.value = "";
}

function deleteItem(e) {
	console.log(e.target);
	const item = e.target;
	if (item.classList [0] === "delete-btn") {
		const todo = item.parentElement;
		// console.log(todo);
		todo.remove();
	}
}


