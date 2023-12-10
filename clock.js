const view_date  = document.querySelector("#view_date");
const view_clock = document.querySelector("#view_clock");

function getNow() {
    const now            = new Date();
    const year           = String(now.getFullYear()).padStart(2,"0");
    const month          = String(now.getMonth()+1).padStart(2,"0");
    const date           = String(now.getDate()).padStart(2,"0");
    const hour           = String(now.getHours()).padStart(2,"0");
    const minutes        = String(now.getMinutes()).padStart(2,"0");
    const seconds        = String(now.getSeconds()).padStart(2,"0");
    view_date.innerText  = `${year}-${month}-${date}`;
    view_clock.innerText = `${hour}:${minutes}:${seconds}`;
}

getNow();
setInterval(getNow, 1000);
