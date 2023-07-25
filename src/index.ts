console.log("hello");

console.log("hey");
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const todoList = document.querySelector<HTMLUListElement>(".todo-list");
const todoForm = document.querySelector<HTMLFormElement>(".new-todo-form");
// document.getElementById('#new-todo-form') as HTMLFormElement | null
const inputTodo = document.querySelector<HTMLInputElement>(".input-todo");

const allTodos: Todo[] = loadTasks();

allTodos.forEach(addTodoItem)


todoForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hiiiiii");
  if (inputTodo?.value == "" || inputTodo?.value == null) return;

  const newTodo: Todo = {
    id: Date.now(),
    title: inputTodo.value,
    completed: false,
    createdAt: new Date(),
  };

  allTodos.push(newTodo)
  addTodoItem(newTodo);
  inputTodo.value=""
});

function addTodoItem(todo: Todo) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener('change',()=>{
    todo.completed=checkbox.checked;
    saveTasks()
  })
  checkbox.checked=todo.completed
  label.append(checkbox,todo.title);
  item.append(label);
  todoList?.append(item)
}

function saveTasks() {
  localStorage.setItem("TODOS" , JSON.stringify(allTodos))
}

function loadTasks(): Todo[]{
  const todoJSON = localStorage.getItem("TODOS");
  if(todoJSON == null) return []
  return JSON.parse(todoJSON)
}

// export {}
