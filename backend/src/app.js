const express = require('express');
const app = express();

// middleware to parse JSON 
app.use(express.json());

//base test route
app.get('/', (req, res) => {
    res.send('API is working properly');
});

module.exports = app;