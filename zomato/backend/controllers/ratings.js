const ratingModel = require('../models/ratings');



exports.getallRatings = (req,res) =>{
    res.json(ratingModel);
}
exports.getRatingsForRestaurant =  (req,res)=>{
   
    var restaurant = req.params.restaurant;

    var result = ratingModel.ratingData.filter(content => content.restaurant === restaurant);
    
    res.json(
        {
            response : result
        }
    );
}

exports.getRatingsDataForRestaurant = (req,res) =>{
    var restaurant = req.body.restaurant;

    var result = ratingModel.ratingData.filter(content => content.restaurant === restaurant);
    
    res.json(
        {
            response : result
        }
    );
 }
