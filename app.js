const express = require('express');
const app = express();
const things = require('./routes/things.js');

app.use('/', (req, res, next)=>{
    console.log(req);
    // res.send("hello express use"); 

    next();
});



app.get("/", function(req, res) {
    console.log(req);

   res.send("hello express"); 
});

app.use("/things",things);


app.listen(5005, ()=>{
    console.log("server is running on port 5005 ...");
})