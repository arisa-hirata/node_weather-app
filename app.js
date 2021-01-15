const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=a82f4d258896b5439e67cdbd68b4c0e4&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    const temperature = response.body.current.temperature;
    const feelslike = response.body.current.feelslike;
    const desc = response.body.current.weather_descriptions[0];

    console.log(`${desc}. It is currently ${temperature} degrees out. It feels like ${feelslike}% degrees out.`);
});
