
//javascript for fetching data from api from openweathermap.org

document.addEventListener('DOMContentLoaded',function(){

const weatherContainer = document.getElementById('weatherContainer');

const API_KEY = "50985ff4793818569560d609cdfcaeb3";


const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let weatherCondition = " ";
let temperature  = 0;
async function cityWeather(city){
    const result = await fetch(api_url + city + `&appid=${API_KEY}`);
    var data = await result.json();

    console.log(data);
    
    //display all the information of the current city...
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" + " "+ "("+data.weather[0].main +")";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".feelsLike").innerHTML = Math.round(data.main.feels_like) + "°c";
    weatherCondition = data.weather[0].main;
    
    temperature = Math.round(data.main.temp)

    weatherBackground(weatherCondition);
}

window.searchCity = () => {
    const city_search = document.getElementById('city-search').value;
    cityWeather(city_search);
}


// cityWeather("toronto");

function weatherBackground(weatherCondition){
    switch(weatherCondition){
        case 'Clouds':
            if(temperature<0){
            weatherContainer.style.backgroundImage = "url('clouds.jpeg')";
            }
            else{
                weatherContainer.style.backgroundImage = "url('clouds2.jpeg')";
            }
            break;
        case 'Clear':
            weatherContainer.style.backgroundImage = "url('clear.jpeg')";
            break;
        case 'Rain':
            weatherContainer.style.backgroundImage = "url('rain.webp')";
            break;
        case 'Drizzle':
            weatherContainer.style.backgroundImage = "url('drizzle.gif')";
            break;
        case 'Mist':
            weatherContainer.style.backgroundImage = "url('mist.jpeg')";
            break;
        case 'Smoke':
            weatherContainer.style.backgroundImage = "url('smoke.png')";
            break;
        case 'Snow':
            weatherContainer.style.backgroundImage = "url('snow.gif')";
            break;
        case 'Haze':
             weatherContainer.style.backgroundImage = "url('mist.jpeg')";
            break;
        default:
            weatherContainer.style.backgroundImage = "url('background.jpeg')";

    }
}
});