//Assignment 4 -- Q 1 Location api

const city = require('../models/city');



exports.getCityList = (req,res) =>{
    //fetch the data from MongoDB using the City model
    
    city.findOne().then(result => {

        console.log("result of find one : " , result);
    }).catch(error => {
            res.status(200).json({
                message: error
            })
        });        

    city.find().then(result => {

        console.log("result" , result);
         res.status(200).json({
             message: "Fetched successfully",
             cities : result
         })
    }).catch(error => {
        res.status(200).json({
            message: error
        })
    });
    
}
