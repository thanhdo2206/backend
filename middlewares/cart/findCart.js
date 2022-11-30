const { Cart } = require("../../models/index");

const findCartOfUser = async (req, res, next) => {
  const { id } = req.user;
  try {
    const cartUser = await Cart.findOne({
      where: {
        user_id: id,
      },
    });

    if (cartUser) {
      req.cart = cartUser;
      next();
    }else {
        res.status(404).send("Not Found!");

    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { findCartOfUser };
