//adding express.js to project so its features can be used.
const express = require("express");

//setting up a port variable that will set to ether an environment set point or default to 3001
const PORT = process.env.PORT || 3001;
//calling an instance of express and naming it app
const app = express();
//adding htmlRoutes file to server
const htmlRoutes = require('./routes/htmlRoutes')

//middleware for handling objects with arrays
app.use(express.urlencoded({ extended: true }))
//middleware for handling json objects
app.use(express.json());
//middle ware to allow access to public folder
app.use(express.static('public'))

//using htmlRoutes
app.use('/', htmlRoutes);


//server set to listen for request on port saved in PORT
app.listen(PORT, () =>{
    console.log(`API server now on port ${PORT}`)
})