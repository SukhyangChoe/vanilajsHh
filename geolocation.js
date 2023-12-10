const API_KEY = "11b38183ba24fa2ae3d4cc7548fd2aac";

function getSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#div_weather span:first-child");
        const city = document.querySelector("#div_weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function getError() {
    console.log("getError");
}
navigator.geolocation.getCurrentPosition(getSuccess, getError);

