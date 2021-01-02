const restaurantModel = require('../models/restaurantdata');



exports.getallRestaurants = (req,res) =>{
    res.json(restaurantModel);
}
exports.getRestaurantForcity =  (req,res)=>{
   
    var city = req.params.city;

    var result = restaurantModel.restaurantData.filter(content => content.city_name == city);
    
    res.json(
        {
            response : result
        }
    );
}

exports.getRestaurantDataForcity =  (req,res)=>{
    var city = req.body.city_name;

    var result = restaurantModel.restaurantData.filter(content => content.city_name == city);
    
    res.json(
        {
            response : result
        }
    );
}
