const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')
const userGeoPlace = process.argv[2];

if (!userGeoPlace) {
    return console.log('Please enter location');
}
else {
    geocode(userGeoPlace, (error, {longtitude, latitude, location} = {}) => {
        if (error) {
            return console.log(error);
        }
        forecast(longtitude, latitude, (error, forecastData) => {
            console.log(location)
            console.log(forecastData);
        })
    })

    console.log('argv', process.argv);
    console.log('argv', process.argv[2]);

}
