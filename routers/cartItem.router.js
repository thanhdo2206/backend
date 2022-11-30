const express = require("express");
const { updateCart } = require("../controllers/cart.controller");
const { addProductCartItem, deleteCartItem, getAllCartItemOfUser } = require("../controllers/cartItem.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { findCartOfUser } = require("../middlewares/cart/findCart");

const cartItemRouter = express.Router();

cartItemRouter.get("/",authenticate,findCartOfUser,getAllCartItemOfUser)
cartItemRouter.post('/',authenticate,findCartOfUser,addProductCartItem,updateCart);
cartItemRouter.delete('/:id',authenticate,findCartOfUser,deleteCartItem,updateCart);

module.exports = cartItemRouter;