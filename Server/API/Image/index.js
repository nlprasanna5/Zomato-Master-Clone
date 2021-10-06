require('dotenv').config();
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

//Database model
import {ImageModel} from "../../database/allModels";

//utilities
import {s3Upload} from "../../Utilis/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});


/**
 Route           /
 Description     uploading given image to S3 bucket, and then saving to mongoDB
 params          _id
 Access          Public
 Method          GET
 */

 Router.post("/", upload.single("file"), async(req,res) => {
     try {
         const file =req.file;

         //S3 bucket options
         const bucketOptions = {
             Bucket: "trainingshapeai",
             Key: file.originalname,
             Body: file.buffer,
             contentType: file.mimetype,
             ACL: "public-read"
         };

         /*const s3Upload = (options) => {
            return new Promise((resolve, reject) => 
                s3Bucket.upload(options, (error,data) => {
                    if(error) return reject(error);
                    return resolve(data);
                })
            );
        }; */

        const uploadImage = await s3Upload(bucketOptions);
         
     } catch (error) {
         return res.status(500).json({error: error.message});
         
     }
 });

 export default Router;