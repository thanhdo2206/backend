const express = require("express");
const { User } = require("../models");
const { register, login,uploadAvatar,editProfile,getAllUser } = require("../controllers/user.controller");
const {authenticate} = require("../middlewares/auth/authenticate")
const {
  checkExistByUserName,
  checkPassword,
} = require("../middlewares/validations/checkExist");
const { uploadImage } = require("../middlewares/upload/uploadImg");
const userRouter = express.Router();

userRouter.get("/",getAllUser);
userRouter.post("/register", register);
userRouter.post("/login", checkExistByUserName(User), checkPassword, login);
// userRouter.post("/refreshToken", refreshToken);

userRouter.put("/upload-avatar/:id",authenticate,uploadImage("avatar") ,uploadAvatar);
userRouter.put("/:id",authenticate,editProfile)


module.exports = userRouter;
