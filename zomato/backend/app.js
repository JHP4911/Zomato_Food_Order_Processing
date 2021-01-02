const express = require('express');
const app = express();

const router = require('./routes/route');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/api",router);

mongoose.connect(
    'mongodb://127.0.0.1:27017/zomato',
   // 'mongodb://127.0.0.1:49901/zomato',
    {useNewUrlParser : true, useUnifiedTopology: true}
    ).then(success =>{
        console.log("connected");
        app.listen(5008,()=>{
   
            console.log("server is running at : 5008");
        });
        
    }).catch(error => {
        console.log('error');
    });











// var operatingSystem = require('os');

// console.log(operatingSystem.platform());

// fileSystem = require('fs');

// fileSystem.writeFileSync ('akanksha.txt',"Welcome Akanksha");

// var hypertext = require('http') ;
// hypertext.createServer(function(req,res){
   
//    //console.log(req);
//    //console.log(res);
   
//    if(req.url=="/getmeArch"){
//     res.write(`Server is running on platform : ${operatingSystem.arch()}`);
//    }
//     // res.writeHead(401);

//     else if(req.url=="/getmePlatform"){
//         res.write(`Server is running on platform : ${operatingSystem.platform()}`);

//     }
//     else{
//         res.write("generic resp");
//     }
//     res.end();
// }).listen(8080);
