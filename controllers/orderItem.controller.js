const { OrderItem, CartItem, Cart, sequelize } = require("../models/index");

const addOrderItems = async (req, res, next) => {
  const { newOrder } = req;
  const cartId = req.cart.id;

  try {
    const [results] =
      await sequelize.query(`select "product_id","name_product","image_product","price_product","quantity","payment_cartItem"
      from "CartItems" 
      where "CartItems".cart_id = ${cartId}`);

    const orderItems = results.map((orderItem) => {
      const { payment_cartItem, ...orderItemRest } = orderItem;
      return {
        ...orderItemRest,
        payment_orderItem: orderItem.payment_cartItem,
        order_id: newOrder.id,
      };
    });

    const listOrderItem = await OrderItem.bulkCreate(orderItems);
    const dataResult = { ...newOrder.dataValues, listOrderItem };

    await CartItem.destroy({ where: { cart_id: cartId } });

    await res.status(201).send(dataResult);
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getDetailOrder = async (req, res) => {
  const { idOrder } = req.query;

  try {
    const listOrderItem = await OrderItem.findAll({
      where: { order_id: idOrder },
    });
    res.status(201).send(listOrderItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addOrderItems, getDetailOrder };
