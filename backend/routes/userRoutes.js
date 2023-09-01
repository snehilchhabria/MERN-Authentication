import express from 'express'
const router  = express.Router()
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile, } from '../controllers/userController.js'

router.post('/', authUser)
router.post('/auth', authUser)
router.post('/auth', authUser)
router.route('/profile', logoutUser).get(getUserProfile).put(updateUserProfile);

export default router;