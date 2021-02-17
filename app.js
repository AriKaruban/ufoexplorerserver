const express=require('express');
const app=express();
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const e = require('express');
const { resolve } = require('path');
let rawdata = fs.readFileSync('1980-1999.json');
let parsedata = JSON.parse(rawdata);
let rawdata2 = fs.readFileSync('2010-2021.json');
let parsedata2 = JSON.parse(rawdata2);
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
async function getdataofyear(year,res){
    let p=new Promise((resolve,rejected)=>{
        var tempjson = []
        for(const entry of parsedata){
            if(entry!=={}&&entry.occuredDate.substr(entry.occuredDate.length - 4)==year){
                tempjson.push(entry)
            }
        }
        resolve(tempjson)
    })
    let data = await p
    await res.send(data)
}
async function getdataofyear2010(year,res){
    let p=new Promise((resolve,rejected)=>{
        var tempjson = []
        for(const entry of parsedata2){
            if(entry.occuredDate.substr(entry.occuredDate.length - 4)==year){
                tempjson.push(entry)
            }
        }
        resolve(tempjson)
    })
    let data = await p
    await res.send(data)
}
app.get('/:year',(req,res)=>{
    var year = req.params.year;
    if(year>=1980&&year<=1999){
        getdataofyear(year,res)
    }else if(year>=2010&&year<=2021){
        getdataofyear2010(year,res)
    }else{res.send("year not in data")}
})
const port=process.env.PORT||3000;
console.log(port);
app.listen(port,()=>{
    console.log('Listening on localhost');
})