import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc  Auth user/set token
// routes  POST /api/users/auth
// @access Public
 const authUser = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Auth User'})
 })

// @desc  Register a new user
// routes  POST /api/users/
// @access Public
 const registerUser = asyncHandler(async(req,res) => {    

   const { name, email, password } = req.body;

   const userExists = await User.findOne({ email });

   if(userExists) {
      res.status(400);
      throw new Error('User already exists');
   }
   const user = await User.create({
      name, 
      email,
      password
   });
    
    res.status(200).json({message: 'Register User'})
 });

// @desc  Logout user
// routes  POST /api/users/logout
// @access Public
 const logoutUser = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Logged out User'})
 });

// @desc  Get user profile
// routes  GET /api/users/profile
// @access Private
 const getUserProfile = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'User Profile'})
 });

// @desc  Update user profile
// routes  PUT /api/users/profile
// @access Private
 const updateUserProfile = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Update    User Profile'})
 });

 export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
 };