const mongoose = require('mongoose')
const bcrypt = require('bcrypt') 

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
   
});

const Person = mongoose.model('person' , personSchema)

module.exports = Person

