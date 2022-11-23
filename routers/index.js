const express = require('express');
const categoryRouter = require('./category.router');
const productRouter = require('./product.router');
const userRouter = require('./user.router');
const rootRouter = express.Router();

rootRouter.use("/user",userRouter);
rootRouter.use("/category",categoryRouter);
rootRouter.use("/product",productRouter);



module.exports = rootRouter
