# Weather App
Weather app in Node.js that displays current weather data from any city using the OpenWeatherMap API.
<div align="center">
  <img src="https://user-images.githubusercontent.com/89810908/149850177-55a81ae5-2509-4a3b-bb8a-7290ac118e21.PNG" width="750"></img>
</div>
<br>

- Node.js
- Embedded JavaScript templates
- Express
- JavaScript


## Requirements
```
node v16.1.x
```

## Getting Started
### Install all web app dependencies
```
cd weather
npm install body-parser dotenv ejs express request
```
### Generate API Key
Navigate to https://openweathermap.org/ and create an account/sign in. 
Once logged in, generate an API key to access the public weather data.
Create an ``.env`` file and include the following:
```
API_KEY = (API KEY HERE)
```

### Running the Project
Navigate to the `weather` directory and run `main.js`. This can be paired
with the nodemon tool via `npm install nodemon` to easily start the project with the command
```
npm start
```

## Contact Info
rodrigoebravo@outlook.com


