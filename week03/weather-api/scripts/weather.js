// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//CREATE REQUIRED VALUES FOR THE URL
const myKey = '1b8cd4861185b3a20cee66d9b3a7c4ed';
const lat = 49.750596876979124;
const lon = 6.635751475539449;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myKey}`;