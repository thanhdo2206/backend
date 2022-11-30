const { CartItem, sequelize } = require("../models/index");

const getAllCartItemOfUser = async (req, res) => {
  const { id } = req.cart;


  try {
    const [results] = await sequelize.query(`select *
    from "CartItems"
    where "CartItems".cart_id = ${id}`);

    if (results.length > 0) {
      res.status(201).send(results);
    } else {
      res.status(404).send("There are no products in the cart");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addProductCartItem = async (req, res, next) => {
  const { price_product, quantity } = req.body;
  const payment_cartItem = price_product * quantity;
  const { id } = req.cart;

  const data = { ...req.body, payment_cartItem, cart_id: id };
  try {
    // console.log("data",data);
    const newCartItem = await CartItem.create(data);
    await res.status(201).send(newCartItem);
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCartItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    await CartItem.destroy({ where: { id } });
    await res.status(200).send("Delete cart item successfully");
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addProductCartItem, deleteCartItem, getAllCartItemOfUser };
