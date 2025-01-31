import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localfilepath) => {
    try {
        if(!localfilepath) return null
        const response = await cloudinary.uploader.upload(
            localfilepath, {
                resource_type: "auto"
            }
        )
        // console.log();
        // once the file is uploaded , we would like to delete it from our server
        fs.unlinkSync(localfilepath)
        return response
    } catch (error) {
        fs.unlinkSync(localfilepath);
        return null;
    }
}

const deleteFromCloudinary = async (publicId) => {
    try {
       const result = await cloudinary.uploader.destroy(publicId); 
       console.log("Deleted from cloudinary", publicId);
       
    } catch (error) {
        console.log("Error deleting from Cloudinary", error);
        return null;
    }
}

export {uploadOnCloudinary , deleteFromCloudinary}