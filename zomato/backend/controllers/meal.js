//Assignment 4 -- Q3 meal type api

const meal = require('../models/meal');



exports.getmealList = (req,res) =>{
    //fetch the data from MongoDB using the meal model

    meal.find().then(result => {

        console.log("result" , result);
         res.status(200).json({
             message: "Fetched successfully",
             meals : result
         })
    }).catch(error => {
        res.status(200).json({
            message: error
        })
    });
    
}
