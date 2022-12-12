const express = require("express");
const { getCartOfUser, getAllCart } = require("../controllers/cart.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { findCartOfUser } = require("../middlewares/cart/findCart");

const cartRouter = express.Router();

cartRouter.get("/",authenticate,findCartOfUser,getCartOfUser);
cartRouter.get("/getAllCart",getAllCart);



module.exports = cartRouter;