const express = require('express');
const app = express();

app.get("/", function(req, res) {
    console.log(req);

   res.send("hello express"); 
});


app.listen(5005, ()=>{
    console.log("server is running on port 5005 ...");
})