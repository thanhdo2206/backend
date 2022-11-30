const express = require("express");
const { getTotalCart, getAllCart } = require("../controllers/cart.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { findCartOfUser } = require("../middlewares/cart/findCart");

const cartRouter = express.Router();

cartRouter.get("/",authenticate,findCartOfUser,getTotalCart);
cartRouter.get("/getAllCart",getAllCart);



module.exports = cartRouter;