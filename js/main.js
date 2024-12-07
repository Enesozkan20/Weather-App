import { getWeatherData } from "./api.js";
import { elements } from "./ui.js";

elements.form.addEventListener("submit", (e) => {
    e.preventDefault();
    var input = e.target[0];
    var city = input.value;
    getWeatherData(city);

    input.value = "";
});

elements.locations.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        var city = e.target.innerText;
        getWeatherData(city);
    }
});



