import express from "express";
import {requireSignIn, isAdmin} from "../middlewares/authMiddleware.js"
import {braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController} from "../controllers/productController.js"
import formidable from 'express-formidable'


const router = express.Router();

//routes
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

//update product
router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProductController);

//get products
router.get("/get-product", getProductController)

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//count product
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController)

//get similar product
router.get('/related-product/:pid/:cid',realtedProductController )

//category wise product
router.get('/product-category/:slug', productCategoryController)

// payment token
router.get('/braintree/token', braintreeTokenController)

//payment
router.post('/braintree/payment', requireSignIn, braintreePaymentController)

export default router;