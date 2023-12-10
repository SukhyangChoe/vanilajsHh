const inp_username = document.querySelector("#inp_username");
const btn_login    = document.querySelector("#btn_login");
const show_username = document.querySelector("#show_username");

const HIDDEN_CLASS = "hidden";

function showToDoList() {
    document.querySelector("#div_todoList").classList.remove(HIDDEN_CLASS);
    document.querySelector("#inp_todo").focus();
}

function handleBtnLoginClickEvent(event) {
    event.preventDefault(); 
    const username = inp_username.value;
    if(username != "") {
        localStorage.setItem("id",username);
        inp_username.value = "";
        show_username.innerText = `Hello ${username}!`;
        show_username.classList.remove(HIDDEN_CLASS);
        inp_username.classList.add(HIDDEN_CLASS);
        btn_login.classList.add(HIDDEN_CLASS);
        showToDoList();
    }
}

btn_login.addEventListener("click",handleBtnLoginClickEvent);
inp_username.focus();