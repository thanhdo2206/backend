const { Cart, sequelize } = require("../models/index");

const getTotalCart = async (req, res) => {
  const { cart } = req;
  try {
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllCart = async (req, res) => {
  try {
    const listCart = await Cart.findAll();
    res.status(201).send(listCart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createCart = async (req, res) => {
  console.log("thanh");

  const { newUser } = req;

  try {
    if (newUser) {
      const newCart = await Cart.create({ user_id: newUser.id });
      console.log("tao cart thanh cong");
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

const updateCart = async (req, res) => {
  const { id } = req.cart;

  try {
    const [result] =
      await sequelize.query(`select sum("CartItems"."payment_cartItem") as total_cart
      from "CartItems"
          where "CartItems".cart_id = ${id}
          group by "CartItems".cart_id;`);

    const totalCartUpdated = result[0] ? result[0] : { total_cart: 0 };
    console.log("totalCartUpdated", totalCartUpdated);

    await Cart.update(totalCartUpdated, {
      where: { id },
    });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = { createCart, updateCart, getTotalCart, getAllCart };
