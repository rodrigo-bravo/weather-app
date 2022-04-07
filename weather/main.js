// Install Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

// Require and configure dotenv
require('dotenv').config()

// Set up openWeatherMap API key
const apiKey = `${process.env.API_KEY}`

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Setup your default display on launch
app.get("/", function (req, res) {
    res.render("index", { weather: null, error: null });
  });

app.post('/', function(req, res) {
    // Use inputed city name to fetch data with header url
    let city = req.body.city
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    // Request for data using the URL
    request(url, function(err, response, body) {
        if (err) {
            res.render('index', { weather: null, error: 'Error, please try again' })
        } else {
            let weather = JSON.parse(body)

            // Gather fiels within API response if group of weather parameters (rain, snow, etc.) is valid
            if (weather.main == undefined) {
                res.render('index', { weather: null, error: 'Error, please try again' });
            } else {
                let place = `${weather.name}, ${weather.sys.country}`, 
                weatherTimezone = `${new Date(weather.dt * 1000 - weather.timezone * 1000)}`,
                weatherTemp = `${weather.main.temp}`,
                weatherPressure = `${weather.main.pressure}`,
                weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                weatherDescription = `${weather.weather[0].description}`,
                humidity = `${weather.main.humidity}`,
                clouds = `${weather.clouds.all}`,
                visibility = `${weather.visibility}`,
                main = `${weather.weather[0].main}`,
                weatherFahrenheit = +(Math.round(((weatherTemp * 9) / 5 + 32) + "e+2") + "e-2")
                windSpeed = `${weather.wind.speed}`

                // Render the data to ejs file before displaying it out
                res.render("index", {
                  weather: weather,
                  place: place,
                  temp: weatherTemp,
                  pressure: weatherPressure,
                  icon: weatherIcon,
                  description: weatherDescription,
                  timezone: weatherTimezone,
                  humidity: humidity,
                  fahrenheit: weatherFahrenheit,
                  clouds: clouds,
                  visibility: visibility,
                  main: main,
                  error: null,
                })
            }
         }
    })
})

// Listening on http://localhost:8080/
app.listen(8080, function () {
  console.log("Weather app listening on port 8080!");
});
