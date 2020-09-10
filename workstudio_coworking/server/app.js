

var express = require('express')

var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./route'))

app.listen(8000)





// const express = require("express")
// // var cors = require('cors')
// // const mongoose = require('mongoose');

// // mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// var app = express();
// // app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// // const db = mongoose.connection;
// // db.on('error', function(){
// //   console.log("couldn't connect to db");
// // });

// // db.once('open', function() {
// //   console.log("database connected")
// // });

// // app.use(function(req, res, next) {
// //     res.header("Access-Control-Allow-Origin", "*");
// //     next();
// // });

// app.get('/', (req, res)=>{
//     console.log('hello')
//     res.send('welcome to india')
// })

// app.use(require('./route'));



// app.listen(8000)