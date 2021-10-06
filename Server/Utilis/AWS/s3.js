import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
    accessKeyId: "AKIAWHF2CLQLKRKLVRFV",
    secretAccessKey: "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",
    
    region: "ap-south-1"
});

export const s3Upload = (options) => {
    return new Promise((resolve, reject) => 
        s3Bucket.upload(options, (error,data) => {
            if(error) return reject(error);
            return resolve(data);
        })
    );
};