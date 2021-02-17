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
    res.send(parsedata)
})
app.get('/1980_1999',(req,res)=>{
    res.send(parsedata[1])
})
app.get('/2010_2021',(req,res)=>{
    res.send(parsedata2)
})
const port=process.env.PORT||3000;
console.log(port);
app.listen(port,()=>{
    console.log('Listening on localhost');
})