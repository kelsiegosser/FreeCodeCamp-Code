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

// change from C to F
function CtoF(Celsius) {
    return Celsius * 9 / 5 + 32;
}
// change from F to C
function FtoC(Fahrenheit) {
    return (Fahrenheit - 32) * 5 / 9;
}

function toggleTemp() {
    if (tempType.innerHTML === "C") {
        temperature.innerHTML = CtoF(temperature.innerHTML).toFixed(1);
        tempType.innerHTML = "F";
    } else if (tempType.innerHTML === "F") {
        temperature.innerHTML = FtoC(temperature.innerHTML).toFixed(1);
        tempType.innerHTML = "C";
    }
}

// update the data from API
function updateDataToUI(location, weather, temp, country) {
    loc.innerHTML = location;
    cntry.innerHTML = country;
    weatherIcon.innerHTML = `<img src="${weather[0].icon}" />`;
    weatherDesc.innerHTML = weather[0].description;
    temperature.innerHTML = (temp * 9 / 5 + 32).toFixed(1);
}

// toggle the temperature scale
tempType.addEventListener("click", toggleTemp);

window.onload = function() {
    getLocation();
};
