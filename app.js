const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

request({
  url: `http://mapsogleapis.com/maps/api/geocode/json?address=${argv.a}`,
  json: true
}, (error, response, body) => {
  if (error) {
      console.log('Unable to connect to Google servers.');
  } else if (body.status === 'ZERO RESULTS') {
      console.log(response);
      console.log('Unable to find your address');
    } else if (body.status === 'OK') {
      console.log(response);
      console.log(`Formatted address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    } else {
      console.log(response);
    }
});