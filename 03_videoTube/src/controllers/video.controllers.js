import mongoose, {isValidObjectId} from "mongoose";
import { Video } from "../models/video.models.js";
import { User } from "../models/user.models.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { deleteFromCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";


// publishAVideo
// getVideoById
// updateVideo
// deleteVideo
// togglePublishStatus
const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;
    //TODO: get all videos based on query, sort, pagination

});

const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description} = req.body;

    if(!title || !description) {
        throw new apiError(400, "Please provide title and description");
    }

    const localVideoPath = req.files?.video?.[0]?.path;

    if(!localVideoPath) {
        throw new apiError(401, "Video file is missing");
    }

   try {
     const videoUrl = await uploadOnCloudinary(localVideoPath);
     console.log("Video uploaded ", videoUrl);

   } catch (error) {

    console.log("Error uploading video ", error);
    throw new apiError(500, "Error uploading video");
   }

    return res
        .status(201)
        .json(new apiResponse(201, videoUrl ,"Video publish successfully"));


});

const getVideoById = asyncHandler( async(req, res) => {
    const { videoId } = req.params;

    if(!isValidObjectId(videoId)) {
        throw new apiError(400, "Invalid video id");
    }

   try {
     const video = await Video.findById(videoId);
 
     if(!video) {
         throw new apiError(404, "Video not found");
     }
 
     return res.status(200).json( new apiResponse(200, video, "Video found successfully"));
   } catch (error) {
    console.log("Error getting video ", error);
    throw new apiError(500, "Error getting video");
    
   }
}); 

const updateVideo = asyncHandler( async(req, res) => {
    const { videoId } = req.params;
    const { title, description, thumbnail} = req.body;

    if(!isValidObjectId(videoId)) {
        throw new apiError(400, "Invalid video id");
    }

    if(!title || !description || !thumbnail) {
        throw new apiError(400, "Please provide title, description and thumbnail");
    }

   try {
     const video = await Video.findByIdAndDelete(
         req.video?._id,
         {
             $set : {
                 title, 
                 description,
                 thumbnail
             }
         }, 
         {new: true}
     );
 
     return res
     .status(200)
     .json ( new apiResponse( 200 , video, "Video updated successfully"));
   } catch (error) {
    console.log("Error updating video ", error);
    throw new apiError(500, "Error updating video");
   }

});

const deleteVideo = asyncHandler( async(req, res) => {
    const { videoId } = req.params;

    if(!isValidObjectId(videoId)){
        throw new apiError(400, "Video Id is invaild");
    }

   try {
     const video = await Video.findByIdAndDelete();
 
     if(!video) {
         throw new apiError(404, "Video not found");
     }
 
     return res
     .status(200)
     .json( new apiResponse(200, video, "Video deleted Successfully"));
   } catch (error) {
    
    console.log("Error deleting video ", error);

    throw new apiError(500, "Error deleting video");
    
   }
    
});

const togglePublishStatus = asyncHandler( async(req, res) => {
    const { videoId } = req.params;

    if(!isValidObjectId(videoId)) {
        throw new apiError(400, "Invalid video id");
    }

   try {
     const video = await Video.findById(video?._id);
 
     if(!video) {
         throw new apiError(404, "Video not found");
     }
 
     //toggle publish video
     video.publishAVideo = !video.publishAVideo;
 
     const updatedVideo = await video.save();
 
     return res
     .status(200)
     .json( new apiResponse(200, updateVideo, "Video publish status updated successfully"));

   } catch (error) {
        console.log("Error updating video publish status ", error);
        throw new apiError(500, "Error updating video publish status");
   }
});


export { getAllVideos, publishAVideo, getVideoById, updateVideo, deleteVideo, togglePublishStatus };