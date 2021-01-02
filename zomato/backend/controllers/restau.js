//Assignment 4 --- Q 2 Schema Restaurant by City API
const restaurantModel = require('../models/restau');


exports.getAllRestaurants = (req,res)=> {
  res.json(restaurantModel.find());
}

exports.getAllRestaurantsBycity = (req,res)=> {
   const city = req.params.city;

   restaurantModel.find({
       city : city
   }).then(result => {

     res.status(200).json({
        
         restaurants :  result
        })
    }).catch(error => {
    res.status(400).json({
        message: error
    })
  });  
  
}

exports.getRestaurantById = (req,res) =>{
  const id = req.params.id;

  restaurantModel.find({
      _id : id
  }).then(result => {

    res.status(200).json({
       
        restaurants :  result[0],
        message : "Success"
       })
   }).catch(error => {
   res.status(400).json({
       message: error
   })
 });  
 
}
//Assigment 5 -- Create API for Restaurant search page with filters, sort and pagination as input parameters
exports.getfilter = (req,res) =>{
    
  // const location_id = req.body.area;
  //  const city = req.body.city;
  // var cost = req.body.cost;
  const mealtype_id = req.body.mealtype;
  const cuisine_id = req.body.cuisine;
  
  let payload = {
     
    'type.mealtype'  : mealtype_id  
  }
  if(cuisine_id && cuisine_id.length > 0 ){
    payload['Cuisine.cuisine'] = {
      $in : cuisine_id
    };

  }
  console.log(payload);
  restaurantModel.find(payload).then(result => {
      
       res.status(200).json({
           message : "filtered list fetched successfully",
           restaurants   : result
       })
  }).catch(error => {
      res.status(400).json({
          message: error
      })
  });  
 }    
 exports.getfiltercost = (req,res) =>{
    
   //const location_id = req.body.area;
    //const city = req.body.city;
   var cost = req.body.cost;
   var mincost = cost.split("-",1);
   var maxcost1 = cost[cost.length - 3 ];
  
   var maxcost2 = cost[cost.length - 2 ];
  
   var maxcost3 = cost[cost.length - 1 ];
  

   maxcost = maxcost1 + maxcost2 + maxcost3;
   console.log("mincost" + mincost + "Maxcost  " + maxcost);
   mincost = Number(mincost);
   maxcost = Number(maxcost);

 restaurantModel.find({
   // area : location_id,
   // city : city,
    cost : {$gt: mincost, $lt:maxcost},
  
   }).then(result => {

    res.status(200).json({
      message : "filtered list fetched successfully",
      restaurants   : result
  })
}).catch(error => {
 res.status(400).json({
     message: error
 })
});  
 }    

