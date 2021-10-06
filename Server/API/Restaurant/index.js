import express from "express";
import { RestaurantModel } from "../../database/allModels";
import { ValidateRestaurantId } from "../../validation/food";

//Validation
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";


const Router = express.Router();

/**
 Route           /
 Description     Get all Restaurants details
 params          None
 Access          Public
 Method          GET
 */

 Router.get("/", async(req,res) => {
     try{
         await ValidateRestaurantCity(req.query);

         const {city} = req.query;
         const restaunrants = await RestaurantModel.find({city});
         return res.json({restaurants});

     } catch(error) {
         return res.status(500).json({error: error.message});

     }
 });


 /**
 Route           /
 Description     Get particular Restaurants details on id
 params          _id
 Access          Public
 Method          GET
 */

 Router.get("/:_id", async(req,res) => {
     try{
         await ValidateRestaurantId(req.params);

         const {_id} = req.params;
         const restaurant = await RestaurantModel.findOne(_id);

         if(!restaurant)
         return res.status(400).json({error: "Restaurant not found"});

         return res.json({restaurant});
     } catch(error) {
         return res.status(500).json({error: error.message});

     }
 });


 /**
 Route           /search
 Description     Get Restaurants details on search
 params          none
 body            searchString
 Access          Public
 Method          GET
 */

 Router.get("/search", async(req,res) => {
     try {
         await ValidateRestaurantSearchString(req.body);

         const {searchString} = req.body;

         const restaurants = await RestaurantModel.find({
             name: {$regex: searchString, $options: "i"},
         });

         return res.json({ restaurants});
     } catch (error) {
         return res.status(500).json({error: error.message});
     }
 });

 export default Router;