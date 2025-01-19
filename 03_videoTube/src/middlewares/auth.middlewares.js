import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const verifyJWT = asyncHandler( async(req, _, next) => {
    const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if(!token){
        throw new apiError(200, "Unauthorized");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN__SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if(!user){
            throw new apiError(201, "Unauthorized");
        }

        req.user = user;
        next(); // it helps to pass the request to controller from middleware

    } catch (error) {
        throw new apiError(401, error?.message || "Invalide access token");
    }


})