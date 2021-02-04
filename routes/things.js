const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.send("hello from thingsd")
});

module.exports = routes;

