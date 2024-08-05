const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    name: {type: String},
    age: {type : Number},
    email: {type : String},
    contact: {type: Number},
    institute:{type:String},
    degree:{type: String},
     year:{type: String},
     course:{type: String},
      instructor:{type: String},
       duration:{type: Number}
})

const User = mongoose.model('User', userSchema)

module.exports =  User