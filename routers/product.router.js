const express = require("express");
const {
  getAllPoduct,
  getDetailPoduct,
  createProduct,
  deleteProduct,
  updateProduct,
  changeStatusProduct,
} = require("../controllers/product.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const { uploadImage } = require("../middlewares/upload/uploadImg");

const productRouter = express.Router();

productRouter.get("/", getAllPoduct);
productRouter.get("/:id", getDetailPoduct);
productRouter.post(
  "/",
  authenticate,
  authorize(["admin"]),
  uploadImage("imgProduct"),
  createProduct
);
productRouter.put(
  "/:id",
  authenticate,
  authorize(["admin"]),
  uploadImage("imgProduct"),
  updateProduct
);
productRouter.put(
  "/change_status/:id",
  authenticate,
  authorize(["admin"]),
  changeStatusProduct
);
productRouter.delete("/:id", authenticate, authorize(["admin"]), deleteProduct);

module.exports = productRouter;
