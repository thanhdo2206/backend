const express = require("express");
const { updateCart } = require("../controllers/cart.controller");
const { createOrder, getAllOrderOfUser, getAllOrder, deleteOrder, changeStatusOrder } = require("../controllers/order.controller");
const { addOrderItems } = require("../controllers/orderItem.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { findCartOfUser } = require("../middlewares/cart/findCart");

const orderRouter = express.Router();

orderRouter.get("/",authenticate,getAllOrderOfUser);
orderRouter.get("/get_all_order",getAllOrder);
orderRouter.put("/change_status_order/:id",authenticate,changeStatusOrder);
orderRouter.post("/",authenticate,findCartOfUser,createOrder,addOrderItems,updateCart);
orderRouter.delete("/:id",deleteOrder);

module.exports = orderRouter;