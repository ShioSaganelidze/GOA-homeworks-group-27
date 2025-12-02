const weatherData = [
  {
    city: "Tbilisi",
    temperature: 22, // °C
    humidity: 55, // %
    windSpeed: 3.5, // m/s
    weatherMain: "Clouds",
    weatherDescription: "scattered clouds",
    weatherIcon: "03d"
  },
  {
    city: "Batumi",
    temperature: 25,
    humidity: 60,
    windSpeed: 4.2,
    weatherMain: "Clear",
    weatherDescription: "clear sky",
    weatherIcon: "01d"
  },
  {
    city: "Kutaisi",
    temperature: 20,
    humidity: 50,
    windSpeed: 2.8,
    weatherMain: "Rain",
    weatherDescription: "light rain",
    weatherIcon: "10d"
  },
  {
    city: "Rustavi",
    temperature: 23,
    humidity: 58,
    windSpeed: 3.0,
    weatherMain: "Clouds",
    weatherDescription: "broken clouds",
    weatherIcon: "04d"
  },
  {
    city: "Gori",
    temperature: 21,
    humidity: 52,
    windSpeed: 3.1,
    weatherMain: "Fog",
    weatherDescription: "foggy",
    weatherIcon: "50d"
  }
];

let cityInput = document.getElementById('cityInput');
let checkBtn = document.getElementById("checkBtn");
let weatherOutput = document.getElementById('weatherOutput');

function weatherDisplay() {
    weatherData.forEach(el => {
        if (el.city.toLowerCase() === cityInput.value.toLowerCase()) {
            weatherOutput.innerHTML = `
            <div class='item'>
                <p><strong>${el.city}</strong></p>
                <p>Temperature: ${el.temperature}°C</p>
                <p>Humidity: ${el.humidity}%</p>
                <p>Wind Speed: ${el.windSpeed} m/s</p>
                <p>Weather: ${el.weatherMain}</p>
                <p>Description: ${el.weatherDescription}</p>
            </div>
            `;
        }
    });

    if (!weatherOutput.innerHTML) {
        weatherOutput.innerHTML = '<p>City not found. Please try again.</p>';
    }
}

checkBtn.addEventListener('click', weatherDisplay);