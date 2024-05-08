const bodyParser = require('body-parser');
const express = require('express');
const Sequelize = require('sequelize'); 
const startDatabase = require('./db.js'); 


const app = express();
app.use(bodyParser.json());


const galaxiesRoutes = require('./Routes/galaxiesRoutes.js');
const starsRoutes = require('./Routes/starRoutes.js');
const planetsRoutes = require('./Routes/planetsRoutes.js');


const sequelize = startDatabase(); 


// Link routes to the app
app.use('/galaxies', galaxiesRoutes);
app.use('/stars', starsRoutes);
app.use('/planets', planetsRoutes);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
