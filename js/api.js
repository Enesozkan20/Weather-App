import { renderUi } from "./ui.js";

var apiKey = "d4dbd406439d567485abdbaaa5c46db6";
async function getWeatherData(city) {
    var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    var data = await response.json();
    renderUi(data);


}

export { getWeatherData };