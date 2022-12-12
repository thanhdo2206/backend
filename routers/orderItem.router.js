const express = require("express");
const { getDetailOrder } = require("../controllers/orderItem.controller");
const { authenticate } = require("../middlewares/auth/authenticate");

const orderItemRouter = express.Router();

orderItemRouter.get("/:idOrder",authenticate,getDetailOrder);

module.exports = orderItemRouter;