const { OrderItem, CartItem, Cart, sequelize,Order ,Product} = require("../models/index");

const addOrderItems = async (req, res, next) => {
  const { newOrder } = req;
  const cartId = req.cart.id;

  try {
    const [results] =
      await sequelize.query(`select product_id,quantity,payment_cartItem
      from CartItems
      where CartItems.cart_id = ${cartId}`);

    const orderItems = results.map((orderItem) => {
      const { payment_cartItem, ...orderItemRest } = orderItem;
      return {
        ...orderItemRest,
        payment_orderItem: payment_cartItem,
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
  const { idOrder } = req.params;

  try {
    const listOrderItem = await OrderItem.findAll({
      where: { order_id: idOrder },
      include: [{ model: Order }, { model: Product }],
    });
    res.status(201).send(listOrderItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addOrderItems, getDetailOrder };
