const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/27567fa313b018af0c231471bfe56b68/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to server.')
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather data.')
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  })
}

module.exports.getWeather = getWeather;