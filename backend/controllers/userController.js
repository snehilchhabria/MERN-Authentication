import asyncHandler from 'express'

// @desc  Auth user/set token
// routes  POST /api/users/auth
// @access Public
 const authUser = asyncHandler( async(req,res) => {
    res.status(200).json({message: 'Auth User'})
 })

 export {
    authUser
 }