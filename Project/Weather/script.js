async function getWeather() {

    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "❌ Please enter a city name";
        return;
    }

    const apiKey = "sk-abcdef1234567890abcdef1234567890abcdef12";  // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            result.innerHTML = "❌ City not found";
            return;
        }

        result.innerHTML = `
            🌍 City: ${data.name} <br>
            🌡 Temperature: ${data.main.temp}°C <br>
            ☁ Weather: ${data.weather[0].main}
        `;

    } catch (error) {
        result.innerHTML = "⚠ Error fetching data";
    }
}