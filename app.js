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
app.get('/1980_1999/:id',(req,res)=>{
    var id = req.params.id;
    res.send(parsedata[id])
})
app.get('/1980_1999/:id/:field',(req,res)=>{
    var id = req.params.id;
    var field = req.params.field;
    res.send(parsedata[id][field])
})
app.get('/:year',(req,res)=>{
    var year = req.params.year;
    let tempjson = []
    if(year>1980&&year<1999){
        parsedata.forEach(element => {
            if(element.occuredDate.substr(element.occuredDate.length - 5)==year){
                tempjson.push(element)
            }
        });
    }
    res.send(tempjson)
})
const port=process.env.PORT||3000;
console.log(port);
app.listen(port,()=>{
    console.log('Listening on localhost');
})