'use strict'
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon');
const allWeatherData=document.querySelector('.weather');


async function checkWeather(city){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5726d6a50bfae41eb2990b1adeaf389d&units=metric`);
    const data= await response.json();
    console.log(data);

    

document.querySelector('.city').innerHTML=data.name;
document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +'°C';
document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
document.querySelector('.wind').innerHTML=data.wind.speed+ ' km/h';

if(data.weather[0].main==='Clouds'){
    weatherIcon.src='images/clouds.png';
}
else if (data.weather[0].main==='Clear'){
    weatherIcon.src='images/clear.png';
}
else if (data.weather[0].main==='rain'){
    weatherIcon.src='images/rain.png';
}
else if (data.weather[0].main==='mist'){
    weatherIcon.src='images/mist.png';
}

}

searchBtn.addEventListener('click', function(){
    checkWeather(searchBox.value);
   searchBox.value='';
   allWeatherData.style.opacity=1;
   
})
