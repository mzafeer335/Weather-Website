

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=39150b7b77f8613afcad3bae629e6705&units=metric`;
    const response = await fetch(URL);
    var data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"KM/H";

    if(data.weather[0].main == "Clouds"){
       WeatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "images/mist.png";
    }
}


searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});