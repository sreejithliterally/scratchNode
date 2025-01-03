    const express = require('express');
    const bodyParser = require('body-parser')
    const request = require('request');

    const app = express()

    app.use(bodyParser.json())



    const PORT = 3000

    const places = [
        { name: 'Kochi', lat: 9.9312, long: 76.2673 },
        { name: 'Mumbai', lat: 19.076, long: 72.8777 },
        { name: 'Delhi', lat: 28.6139, long: 77.209 },
        { name: 'Bangalore', lat: 12.9716, long: 77.5946 },
        { name: 'Chennai', lat: 13.0827, long: 80.2707 },
        { name: 'Hyderabad', lat: 17.385, long: 78.4867 },
        { name: 'Kolkata', lat: 22.5726, long: 88.3639 },
        { name: 'Pune', lat: 18.5204, long: 73.8567 },
        { name: 'Jaipur', lat: 26.9124, long: 75.7873 },
        { name: 'Ahmedabad', lat: 23.0225, long: 72.5714 }
    ]; 

    app.get('/get-weatherinfo',(req,res) => {
        const PlaceName = req.query.name;
        if (!PlaceName) {
            return res.status(404).json({error:'place not found'})
        }


        const place = places.find(p => p.name.toLowerCase() === PlaceName.toLowerCase());
        if (!place) {
            return res.status(404).json({ error: 'Place not found' });
        }



        const weatherstackAPIkey = 'e001d76d8ddb9c27d5dd6f379c141ee4'
        const url = `http://api.weatherstack.com/current?access_key=${weatherstackAPIkey}&query=${place.lat},${place.long}`;

        request(url, (error,response,body) =>{
            if(error){
                return res.status(500).json({error:'Failed to fetch'})
            }
            const weatherData = JSON.parse(body);
            res.json({
                location: PlaceName,
                temperature: weatherData.current.temperature
            })
        })
    });

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });