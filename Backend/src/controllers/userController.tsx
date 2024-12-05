import { Request, Response, NextFunction } from 'express';
import { asyncHnadler } from '../../utils/asyncHandler.js';
import { APIResponse } from '../../utils/APIResponse.js';
import { APIError } from '../../utils/APIError.js';
import { User } from '../models/userModel.js';

const registerUser = asyncHnadler(async (req: Request, res: Response, next: NextFunction) => {
   const {  email, username, password } = req.body;

   // validation
   if (
     [ username, email, password].some((field) => field?.trim() === "")
   ) {
     throw new APIError(400, "All fields are required");
   }

   const existedUser = await User.findOne({
     $or: [{ username }, { email }]
   });

   if (existedUser) {
     throw new APIError(409, "User with email or username already exists");
   }


   
   const user = await User.create({
     email,
     password,
     username: username.toLowerCase()
   });

   const createdUser = await User.findById(user._id).select("-password -refreshToken");

   if (!createdUser) {
     throw new APIError(500, "Something went wrong");
   }

   return res.status(201).json(new APIResponse(200, createdUser, "User registered successfully"));
});

export { registerUser };
