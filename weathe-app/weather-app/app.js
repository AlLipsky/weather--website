const request = require('request');

// const url = 'https://api.darksky.net/forecast/655cc71a0cfcfe124afcadbb694d24d7/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {

//     console.log('It is currently ' + response.body.currently.temperature + ' degrees out. This is ' + response.body.currently.precipProbability + '%');

//     // console.log(response.body.currently)
// }
// )

const geoCodeUrl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGlwc2t5IiwiYSI6ImNrN2l4NHpsbDAyMnEzdG82djNxdWlwMmcifQ.LPYN1nA8Ji_ygIN_K5JNYw&limit=1';
request({ url: geoCodeUrl, json: true }, (error, response) => {

    if (error) {
        console.log('unable to connect');
    }
    else if (response.body.features.length == 0) {
        console.log('wrong location!');
    }
    else {
    console.log('LA longtitude: ', response.body.features[0].center[0]);
    console.log('LA latitude: ', response.body.features[0].center[1]);
    }
}
)