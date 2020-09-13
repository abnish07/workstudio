


var mongoose = require('mongoose')
var express = require('express');
var router = express.Router()
var { options } = require('mongoose');

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connect("mongodb+srv://abnish35:pass123@usersdb.xodih.mongodb.net/WorkStudioDB?retryWrites=true&w=majority")

const db = mongoose.connection;

db.on('error', function(){
    console.log("couldn't connect to db ")
});

db.once('open', function(){
    console.log("database connected")
})

var userData;


var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    email: {type: String, require: true},
    city: String,
    mobileNo: {
        type: Number,
        validator: function(v){
            return /^\d{10}$/.test(v);
        },
        message: props=>`${props.value} is not valid mobile no`
    }
})

router.post("/contact-us",(req, res)=>{
    userData = req.body
    var User = db.model('user', userSchema);
    var newUser = new User();
    newUser.name = userData.name,
    newUser.email = userData.email,
    newUser.city = userData.city,
    newUser.mobileNo = userData.mobileNo

    newUser.save((error, data)=>{
        if(error){
            return console.log(error)
        }
        console.log("data", data)
    })
    console.log(userData)
    return res.status(200).json({error: false, message: 'Register Successful'})
})
 


// router.

// router.get('/', (req, res)=>{
//     console.log(res)
//     return res.send('Welcome to mongoo')
// })

module.exports = router;
















// var mongoose = require('mongoose');
// var express = require('express');
// var router = express.Router();
// var { option } = require('mongoose');
// var { default: Routes } = require('../src/common/Routes');

// mongoose.connect("mongodb+srv://abnish35:pass123@usersdb.xodih.mongodb.net/WorkStudioDB?retryWrites=true&w=majority")

// const db = mongoose.connection;

// db.on('error', function(){
//     console.log("couldn't connect to database")
// });
// db.once('open', function(){
//     console.log("database connected")
// })

// // app.get('/', (req, res)=>{
// //     res.send("welcome to express");
// // })

// // app.get('/contactUs', (req, res)=>{
// //     res.json({status: "success", message: "Thank you for your submission, Our Team will connect with you"})
// // })
// router.get('/', (req, res)=>{
//     console.log(res)
//  res.send('welcome to mongooo')
// })

// module.exports = router;