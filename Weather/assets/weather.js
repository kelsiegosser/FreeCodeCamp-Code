// Set up vars
const weatherIcon = document.getElementById("weather-icon");
const weatherDesc = document.getElementById("weather-desc");
const temperature = document.getElementById("temp-num");
const tempType = document.getElementById("temp-type");
const loc = document.getElementById("location");
const cntry = document.getElementById("country");

// find current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            getWeather(position.coords.latitude, position.coords.longitude);
        });
    } else {
        /*loc.innerHTML*/console.log("Geolocation is not supported by this browser.");
    }
}

// get weather data based on location
function getWeather(lat, long) {
    const weatherAPI = "https://fcc-weather-api.glitch.me/api/current?";
    var weatherAPICurrLoc = weatherAPI + 'lat=' + lat + '&lon=' + long;
    fetch(weatherAPICurrLoc, { method: "get" })
    .then(response => response.json())
    .then(data => {
        updateDataToUI(data.name, data.weather, data.main.temp, data.sys.country);
        console.log(data);
    })
    .catch(error => console.error('Error:', error))
}

// update the data from API
function updateDataToUI(location, weather, temp, country) {
    loc.innerHTML = location;
    cntry.innerHTML = country;
    weatherIcon.innerHTML = `<img src="${weather[0].icon}" />`;
    weatherDesc.innerHTML = weather[0].description;
    console.log(temp);
    temperature.innerHTML = `${temp}&deg;C`;
}

window.onload = function() {
    getLocation();
};
