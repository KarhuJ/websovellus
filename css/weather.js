// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'c42cb5c4b243021b00364538a361e06b';
const city = 'Oulu'; // Replace with your desired city

function fetchWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp.toFixed(1);
            const weatherConditions = data.weather[0].description;

            document.getElementById('city').textContent = cityName;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('conditions').textContent = weatherConditions;
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);
        });
}

// Update weather every 30 minutes (in milliseconds)
setInterval(fetchWeather, 600000);

// Initial call to fetch weather
fetchWeather();
