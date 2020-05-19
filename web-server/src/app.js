const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const app = express();

//define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

//setup handlebars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath);
hbs.registerPartials(partialPath)
//setup static directory
app.use(express.static(publicDirPath))



// app.set('view engine','hbs');
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Alex Lipsky'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'For help, please visit our home page'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Keren',
        author: 'Alex'
    })
})

app.get('/weather', (req, res) => {
    console.log(req.query.location);
    const userGeoPlace = req.query.location
    if (!req.query.location) {

        return res.send({
            error: 'Location not found'
        })
    }
    geocode(userGeoPlace, (error, { longtitude, latitude, location } = {}) => {
        if (error) {
            return res.send({error});
        }
        forecast(longtitude, latitude, (error, forecastData = {}) => {
            res.send({forecast:forecastData,
                location,
                address: req.query.location});
        })
    })


    //  res.send({
    //     location: req.query.location,
    //     weather: 20
    // })

})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search item'
        })
    }
    console.log('query', req.query.search);
    res.send({
        products: []
    })

})

app.get('/help/*', (req, res) => {
    res.render('error', {
        errorMessage: 'wrong page'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        errorMessage: '404 error'
    })
})

app.listen(3000, () => {
    console.log('3000 is ON air');

})

//app.com
//app.com/help
//app.com/about