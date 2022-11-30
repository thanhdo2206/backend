const { Order, sequelize } = require("../models/index");

const getAllOrderOfUser =async (req, res) => {
    const {user} = req;
  try {
    const listOrder = await Order.findAll({ where: { user_id:user.id }});
    res.status(200).send(listOrder);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createOrder = async (req, res, next) => {
  const infUserOrder = req.body;
  const { user, cart } = req;

  try {
    const newOrder = await Order.create({
      ...infUserOrder,
      user_id: user.id,
      total_order: cart.total_cart,
    });
    req.newOrder = newOrder;
    next();
    // res.status(201).send(newOrder);
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = { createOrder,getAllOrderOfUser };
