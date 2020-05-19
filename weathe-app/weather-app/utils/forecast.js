const request = require('request')

const forecast = (longtitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/655cc71a0cfcfe124afcadbb694d24d7/' + coordinates + '?lang=ru';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect', undefined)
        }
        else if (response.body.error) {
            callback('wrong coordinates', undefined)
        }
        else callback(undefined, {
            summary:response.body.daily.data[0].summary,
            currentTemp:response.body.currently.temperature,
            precipProbability: response.body.currently.precipProbability +'%'}
    
)
})}

module.exports = forecast;