//Assignment 4 -- Q 1 Location api

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealSchema = new Schema({
    id: {
       type: String,
       required : true
    },
    name : {
        type : String,
        required : true 
    },
  
    content : {
        type : String,
        required : true 
    },
    image : {
        type : String,
        required : true 
    }
});

module.exports = mongoose.models.meal || mongoose.model('meal' , mealSchema, 'meal');
