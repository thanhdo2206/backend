const express = require("express");
const { updateCart } = require("../controllers/cart.controller");
const { createOrder, getAllOrderOfUser } = require("../controllers/order.controller");
const { addOrderItems } = require("../controllers/orderItem.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { findCartOfUser } = require("../middlewares/cart/findCart");

const orderRouter = express.Router();

orderRouter.get("/",authenticate,getAllOrderOfUser);
orderRouter.post("/",authenticate,findCartOfUser,createOrder,addOrderItems,updateCart);


module.exports = orderRouter;