const request = require('request')

const forecast = (longtitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/655cc71a0cfcfe124afcadbb694d24d7/' + longtitude +',' + latitude + '?lang=ru';
    
    request({url, json: true}, (error, { body }) =>{

        if (error) {

            callback('unable to connect', undefined)
        }
        else if (body.error){

            callback('unable to find')
        }
        else {
            callback(undefined, {
                summary:body.daily.data[0].summary,
                currentTemp:body.currently.temperature,
                precipProbability:body.currently.precipProbability +'%'
            })
        }
    })


}
module.exports = forecast;