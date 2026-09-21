
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container');

//CREATE REQUIRED VALUES FOR THE URL
const myKey = '1f1af9dfc7d0c39f461b21b79cb4156e';
const lat = -22.00916431403047;
const lon = -47.89173007812205;

// API URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${myKey}`;


// ASYNC FUNCTION 
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

// DISPLAY FUNCTION
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
};

// GETTING FORECAST
async function getForecast() {
    try {
        const response = await fetch(forecastURL);

        if (response.ok) {
            const data = await response.json();
            const days = [];

            data.list.forEach(item => {
                const date = item.dt_txt.split(' ')[0];

                if (!days.includes(date)) {
                    days.push(date);
                }
            });

            const forecastDays = days.slice(1, 4);
            
            forecastDays.forEach(day => {
                const forecast = data.list.find(item => {
                    return item.dt_txt.startsWith(`${day} 12:00:00`);
                });

                //Formatting date string
                const date = new Date(`${day}T12:00:00`);
                const formattedDate = date.toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit'
                });

                //Creating Forecast Cards
                const card = document.createElement('div');
                card.innerHTML = `
                <h4>${formattedDate}</h4>
                <p>${forecast.main.temp}&deg;C</p>
                <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}">
                <p>${forecast.weather[0].description}</p>
                `;

                forecastContainer.appendChild(card);
            });

            console.log(forecastDays);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// CALLING FUNCTIONS
apiFetch();
getForecast();