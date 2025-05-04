const API_KEY = 'cb173696a4fe0f3bcf95f0bd7d09cf6c';

function getWeather() {
  const city = document.getElementById('city-input').value;
  const resultDiv = document.getElementById('result');

  if (!city) {
    resultDiv.innerHTML = "Please enter a city.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        resultDiv.innerHTML = "City not found.";
        return;
      }

      resultDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    })
    .catch(err => {
      resultDiv.innerHTML = "Error fetching weather data.";
    });
}