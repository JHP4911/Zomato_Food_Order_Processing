const express = require('express');

const router = express.Router();


var ratingsController = require('../controllers/ratings');
var restaurantController = require("../controllers/restaurantdata");
var cityController = require("../controllers/city");

var restauController = require("../controllers/restau");
var mealsController = require("../controllers/meal");
var userController = require('../controllers/User');

router.get('/getMeLocation', ratingsController.getallRatings);


router.get('/getMeRating/:restaurant', ratingsController.getRatingsForRestaurant);

router.get('/getRestaurantForcity/:city', restaurantController.getRestaurantForcity);

router.get('/getAllRestaurantsBycity/:city',restauController.getAllRestaurantsBycity); //Assignment 4 -- Q 2 Restaurant by city api

router.get('/getmealList',mealsController.getmealList); //Assignment 4 -- Q3 meal type api

router.post('/getRestaurantDataForcity', restaurantController.getRestaurantDataForcity );

router.get('/getCityList', cityController.getCityList); //location api --assignment 4 q1

router.post('/getfilter', restauController.getfilter); //filter api --assignment 5 

router.post('/signup',userController.signUp );
router.post('/login',userController.logIn );
router.get('/getRestaurantById/:id',restauController.getRestaurantById); 
router.post('/getfiltercost',restauController.getfiltercost);
//router.get('/getMeAllTypes', mealsController.allMealTypes);

module.exports = router;
