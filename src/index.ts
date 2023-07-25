console.log("hello");

console.log("hey");


const todoList = document.querySelector<HTMLUListElement>('.todo-list')
const todoForm = document.querySelector<HTMLFormElement>('.new-todo-form')
// document.getElementById('#new-todo-form') as HTMLFormElement | null
const inputTodo = document.querySelector<HTMLInputElement>('.input-todo')

// const addButton = document.querySelector('.add-btn');
// const todosArray = []
// const todosObj ={
//     id: null,
//     text: null,
//     completed: false
// }

todoForm?.addEventListener('submit' , (e)=>{
e.preventDefault();
console.log("hiiiiii");
if(inputTodo?.value === "" || inputTodo?.value=== null)
  {
    const todo = {
      id: Date.now(),
      title: inputTodo.value,
      completed: false, 
      createdAt: new Date()
    }
  }


})


// addButton.onclick = ()=>{
    // todosObj
    // const todoElement = document.createElement('li');
    // const todoElementDelete = document.createElement('button');
    // const todoElementText = document.createElement('p');
    // todoElementText.innerHTML = inputTodo.value
    // todoElementDelete.innerHTML="Delete";
    // todoElementDelete.classList.add('delete-btn')
    // todoElementDelete.setAttribute('id', Date.now())
    // todoElement.appendChild(todoElementText)
    // todoElement.appendChild(todoElementDelete)
    // todoElement.classList.add('flex')
    // todoElement.setAttribute('id', Date.now());
    // todoList.appendChild(todoElement);
    // inputTodo.value="";

    // const deleteButton = document.querySelectorAll('.delete-btn');

    // deleteButton.forEach((ele)=>ele.onclick = () =>{
    //     todoElement.remove(ele.parentElementNode)
    //     console.log(ele.id);
    // })

// }

// export {}