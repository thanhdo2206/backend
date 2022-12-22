const express = require("express");
const { getAllProductRecommend } = require("../controllers/recommend.controller");
const { authenticate } = require("../middlewares/auth/authenticate");


const recommendRouter = express.Router();

recommendRouter.get("/",authenticate, getAllProductRecommend);



module.exports = recommendRouter;
