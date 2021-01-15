const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=a82f4d258896b5439e67cdbd68b4c0e4&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
    const temperature = response.body.current.temperature;
    const feelslike = response.body.current.feelslike;
    const desc = response.body.current.weather_descriptions[0];

    // console.log(`${desc}. It is currently ${temperature} degrees out. It feels like ${feelslike}% degrees out.`);
});

 // Geocoding

const getUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJpc2FoaXJhdGEiLCJhIjoiY2tqeTA3eGNrMDh3aTJ3cDQzdW11aGd6dCJ9.gF1dj5V2ZFfvXeGBKmylAw&limit=1';

request({ url: getUrl, json: true }, (error, response) => {
    console.log(response.body.features[0].center);
    const coordinates = response.body.features[0].center;
    console.log(`latutude is ${coordinates[0]}. Longitude is ${coordinates[1]}.`)
})
