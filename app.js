const express=require('express');
const app=express();
const fs = require('fs');
let rawdata = fs.readFileSync('1980-1999.json');
let parsedata = JSON.parse(rawdata);
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.send(parsedata)
})
const port=process.env.PORT||3000;
console.log(port);
app.listen(port,()=>{
    console.log('Listening on localhost');
})