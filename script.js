const API_KEY = 'cb173696a4fe0f3bcf95f0bd7d09cf6c';
const cityinput = document.getElementById('city-input')

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

      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

resultDiv.innerHTML = `
  <h2>Weather in ${data.name}</h2>
  <img src="${iconUrl}" alt="Weather icon">
  <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
  <p><strong>Description:</strong> ${data.weather[0].description}</p>
  <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
  <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
`;
    })
    .catch(err => {
      resultDiv.innerHTML = "Error fetching weather data.";
    });

    cityinput.value = '';
}

cityinput.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
    e.preventDefault();
        getWeather()
  }
})








    