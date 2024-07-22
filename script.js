
// script.js

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        getWeather(location);
    }
});

async function getWeather(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=44ed852e4bfc4bcc88332453240707&q=${location}`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.location.name}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    `;
}