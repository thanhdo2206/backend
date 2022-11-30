const express = require('express');
const cartRouter = require('./cart.router');
const cartItemRouter = require('./cartItem.router');
const categoryRouter = require('./category.router');
const feedbackRouter = require('./feedback.router');
const orderRouter = require('./order.router');
const orderItemRouter = require('./orderItem.router');
const productRouter = require('./product.router');
const userRouter = require('./user.router');
const rootRouter = express.Router();

rootRouter.use("/user",userRouter);
rootRouter.use("/category",categoryRouter);
rootRouter.use("/product",productRouter);
rootRouter.use("/feedback",feedbackRouter);
rootRouter.use("/cart",cartRouter);
rootRouter.use("/cartItem",cartItemRouter);
rootRouter.use("/order",orderRouter);
rootRouter.use("/orderItem",orderItemRouter);







module.exports = rootRouter
