import express from 'express'
import {registerController, loginController, testController, forgotPasswordController, upadteProfileController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

const router = express.Router()

//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController)

//FORGOT PASSWORD || POST
router.post("/forgot-password", forgotPasswordController);

// TEST ROUTES
router.get('/test', requireSignIn, isAdmin, testController)

// PROTECT USER ROUTE AUTH
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ oke:true });
})

// PROTECT ADMIN ROUTE AUTH
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ oke:true });
})

//update profile
router.put('/profile', requireSignIn, upadteProfileController)
export default router