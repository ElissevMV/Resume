import React, {useState, createRef} from "react";
import '../style/weather.css';



function Weather() {

    const param = {
        "url" : "https://api.openweathermap.org/data/2.5/",
        "appid" : "348713acf84e7edf830f3685e37b6ed2"
    };
    
    function getWeather() {
        let cityId;
        try {
            cityId = document.querySelector('#city').value;
        }
        catch {
            cityId = 498817; 
        }
            fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
            .then(weather => {
                    return weather.json();
                }).then(showWeather);   
    }
    function showWeather(data) {
    //    console.log(data);
        document.querySelector('.weather_w').innerHTML = Math.round(data.main.temp) + '&deg' ;
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + '  M/C';
    }
    getWeather();


    return(
        <div>
           <main className="window">
                <p className="city-p">Выберите город</p>
                <select id="city" onChange={getWeather}>
                    <option value="498817">Санкт-Петербург</option>
                    <option value="524894">Москва</option>
                    <option value="491422">Сочи</option>
                </select>
                <hr />
                <p className="info">Температура</p>
                <p className="weather_w"></p>
                <p className="info">Ветер</p>
                <p className="wind"></p>
                <hr />
           </main>
        </div>
    )
}

export default Weather;