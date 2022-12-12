const express = require("express");
const { User } = require("../models");
const { register, login,uploadAvatar,editProfile,getAllUser, getDetailUser } = require("../controllers/user.controller");
const {authenticate} = require("../middlewares/auth/authenticate")
const {
  checkExistByUserName,
  checkPassword,
  checkSameUserName
} = require("../middlewares/validations/checkExist");
const { uploadImage } = require("../middlewares/upload/uploadImg");
const { createCart } = require("../controllers/cart.controller");
const userRouter = express.Router();

userRouter.get("/",getAllUser);
userRouter.get("/get_infor",authenticate,getDetailUser);

userRouter.post("/register",checkSameUserName, register,createCart);
userRouter.post("/login", checkExistByUserName, checkPassword, login);
// userRouter.post("/refreshToken", refreshToken);

userRouter.put("/upload-avatar/:id",authenticate,uploadImage("avatar") ,uploadAvatar);
userRouter.put("/:id",authenticate,editProfile)


module.exports = userRouter;
