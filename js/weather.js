const apiKey = "c42cb5c4b243021b00364538a361e06b";

// Function to fetch and display weather
function fetchAndDisplayWeather(city) {
  if (!apiKey) {
    console.error(
      "API key is missing. Please set it as an environment variable."
    );
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const cityName = data.name;
      const temperature = data.main.temp.toFixed(1);
      const weatherConditions = data.weather[0].description;

      document.getElementById("city").textContent = cityName;
      document.getElementById("temperature").textContent = temperature;
      document.getElementById("conditions").textContent = weatherConditions;

      // Show the weather container
      document.getElementById("weather-container").style.display = "block";

      // Set a timer to hide the weather after 1 minute (60000 milliseconds)
      setTimeout(() => {
        document.getElementById("weather-container").style.display = "none";
      }, 60000);
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
    });
}

// Add an event listener to the "Show Weather" button
document
  .getElementById("showWeatherButton")
  .addEventListener("click", function () {
    // Get the city entered by the user
    const city = document.getElementById("cityInput").value;

    // Fetch and display weather for the chosen city
    fetchAndDisplayWeather(city);
  });

// Initially hide the weather container
document.getElementById("weather-container").style.display = "none";
