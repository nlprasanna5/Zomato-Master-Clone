import express from "express";

//Database Model
import {MenuModel, ImageModel} from "../../database/allModels";

const Router = express.Router();

/**
 Route           /list
 Description     Get the list of menu based on id
 params          _id
 Access          Public
 Method          GET
 */

 Router.get("/list/:_id", async(req,res) => {
     try {
         const {_id} = req.params;
         const menus = await MenuModel.findOne(_id);

         return res.json({menus});
     } catch (error) {
         return res.status(500).json({error: error.message});
     }
 });

 /**
 Route           /image
 Description     Get menu image based on id
 params          _id
 Access          Public
 Method          GET
 */

Router.get("/image/:id", async(req,res) => {
    try{
        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


 export default Router;