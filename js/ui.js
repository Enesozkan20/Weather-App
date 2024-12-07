var elements = {
    city: document.querySelector('.city'),
    form: document.querySelector("form"),
    status: document.querySelector(".status"),
    icon: document.querySelector(".icon img"),
    degree: document.querySelector("#degree"),
    details: document.querySelector("#details"),
    humidity: document.querySelector("#humidity"),
    wind: document.querySelector("#wind"),
    rise: document.querySelector("#rise"),
    west: document.querySelector("#west"),
    max: document.querySelector("#max"),
    min: document.querySelector("#min"),
    locations: document.querySelector(".locations"),
};

function renderUi(data) {
    console.log(data);
    elements.city.textContent = data.name;
    elements.status.textContent = data.weather[0].main;
    elements.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    elements.degree.textContent = data.main.temp.toFixed(1) + "°";
    elements.details.textContent = data.main.feels_like + "°";
    elements.humidity.textContent = data.main.humidity + "%";
    elements.wind.textContent = data.wind.speed + " km/h";
    elements.rise.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString("de");
    elements.west.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString("de");
    elements.max.textContent = data.main.temp_max.toFixed(1) + "°";
    elements.min.textContent = data.main.temp_min.toFixed(1) + "°";
}

export { elements, renderUi };