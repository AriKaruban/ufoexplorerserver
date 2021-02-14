const { fstat } = require("fs")

let objecttemplate = {occurred_date:"",occurred_time:"",reported_date:"",reported_time:"",posted:"",location_city:"",location_state:"",UFO_shape:"",reported_duration:"",standardized_duration:"",description:""}

const fs = require("fs")
let getdata=async()=>{
    let p=new Promise((resolve,reject)=>{
        fs.readFile(__dirname+"\\data1999-1900.csv","utf8",(error,data)=>{
            resolve(data)
        })
  
    })
    let t = await p
    let rows = t.split('\n"')
    let dataarray = []
    for(let x=0; x<rows.length; x++){
        rows[x]=rows[x].split('","')
        if(rows[x].length>10){
            console.log(x)
        }
    } 
    console.log(rows.length)
    return t
}
getdata()