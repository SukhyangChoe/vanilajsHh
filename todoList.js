const inp_todo = document.querySelector("#inp_todo");
const btn_todo = document.querySelector("#btn_todo");
const ul_todo  = document.querySelector("#ul_todo");

const TODOLIST_KEY = "todos";
let todoList = [];

function getTodoList() {
    const saved_todoList = localStorage.getItem(TODOLIST_KEY);

    if(saved_todoList != null){
        todoList = JSON.parse(saved_todoList);
        todoList.forEach(addTodoList);
    }
}
function saveTodoList(key, todo) {
    if(key != null && todo != null) {
        const obj_todo = {
            id:key,
            value:todo
        };
        todoList.push(obj_todo);
    }
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoList));
}
function deleteTodoList(key) {
    todoList = todoList.filter((todo) => todo.id != key);
    saveTodoList();
}
function handleBtnDelClickEvent(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
    deleteTodoList(li.id);
}
function addTodoList(todo) {
    let key = new Date().getTime();
    if(todo != null && typeof(todo) == 'object') {
        key = todo.id;
        todo = todo.value;
    }
    const li_todo = document.createElement("li");
    const btn_del = document.createElement("button");
    li_todo.innerText = todo;
    btn_del.innerText = "X";
    li_todo.id = key;
    btn_del.addEventListener("click",handleBtnDelClickEvent);
    li_todo.appendChild(btn_del);
    ul_todo.appendChild(li_todo);
    return key;
}
function handleBtnTodoClickEvent(event) { 
    event.preventDefault();

    const todo = inp_todo.value;
    if(inp_todo != "") {
        inp_todo.value = "";
        const key = addTodoList(todo);
        saveTodoList(key, todo);
    }
}

getTodoList();
btn_todo.addEventListener("click", handleBtnTodoClickEvent);