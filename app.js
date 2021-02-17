const express=require('express');
const app=express();
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
let rawdata = fs.readFileSync('1980-1999.json');
let parsedata = JSON.parse(rawdata);
let rawdata2 = fs.readFileSync('2010-2021.json');
let parsedata2 = JSON.parse(rawdata2[0]);
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.send(url.parse(req.url,true).query)
})
app.get('/1980_1999/:id',(req,res)=>{
    res.send(JSON.parse(rawdata[id]))
})
app.get('/2010_2021/:id',(req,res)=>{
    res.send(JSON.parse(rawdata2[id]))
})
const port=process.env.PORT||3000;
console.log(port);
console.log(rawdata[0])
app.listen(port,()=>{
    console.log('Listening on localhost');
})