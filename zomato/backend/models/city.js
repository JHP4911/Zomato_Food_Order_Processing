//Assignment 4 -- Q 1 Location api

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CitySchema = new Schema({
    id: {
       type: String,
       required : true
    },
    name : {
        type : String,
        required : true 
    },
    city_id : {
        type : String,
        required : true 
    },
    location_id : {
        type : String,
        required : true 
    },
    country_name : {
        type:String,
        required : true
    }
});

module.exports = mongoose.models.city || mongoose.model('city' , CitySchema, 'Location');
