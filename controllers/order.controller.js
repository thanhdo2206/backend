const { Order, sequelize, User, OrderItem } = require("../models/index");

const getAllOrderOfUser = async (req, res) => {
  const { user } = req;
  try {
    const listOrder = await Order.findAll({
      where: { user_id: user.id },
      include: [{ model: User, attributes: ["user_name"] }],
    });
    res.status(200).send(listOrder);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllOrder = async (req, res) => {
  try {
    const listOrder = await Order.findAll({
      include: [{ model: User, attributes: ["user_name"] }],
    });
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

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await OrderItem.destroy({ where: { order_id: id } });
    await Order.destroy({ where: { id } });
  } catch (error) {}
};

const changeStatusOrder = async (req, res) => {
  const { id } = req.params;
  const { status_order } = req.body;
  console.log(status_order)

  try {
    await Order.update(
      {
        status_order,
      },
      {
        where: { id },
      }
    );

    const orderUpdated = await Order.findOne({ where: { id } });
    res.status(200).send(orderUpdated);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  createOrder,
  getAllOrderOfUser,
  getAllOrder,
  deleteOrder,
  changeStatusOrder,
};
