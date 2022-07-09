const moongoose = require('mongoose')
const userSchema = moongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
    },
    password:{
        type:String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    }
})

module.exports = moongoose.model('User', userSchema)