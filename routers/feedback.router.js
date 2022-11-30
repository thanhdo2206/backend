const express = require("express");
const { FeedBack } = require("../models/index");

const {
  getAllFeedBack,
  createFeedback,
  getAllFeedBackOfProduct,
  editFeedback,
  deleteFeedBack,
} = require("../controllers/feedback.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { checkExist } = require("../middlewares/validations/checkExist");
const { authorize } = require("../middlewares/auth/authorize");
const feedbackRouter = express.Router();

feedbackRouter.get("/", getAllFeedBack);
feedbackRouter.get("/get_all_feedback_product",getAllFeedBackOfProduct);
feedbackRouter.post("/",authenticate, createFeedback);
// feedbackRouter.put("/:id",authenticate, checkExist(FeedBack),editFeedback);
// feedbackRouter.delete("/:id",authenticate,authorize(["client"]),checkExist(FeedBack), deleteFeedBack);

module.exports = feedbackRouter;
