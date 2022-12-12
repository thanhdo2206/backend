const { CartItem, sequelize, Product, Cart, User } = require("../models/index");

const getAllCartItemOfUser = async (req, res) => {
  const { id } = req.cart;

  try {
    const [results] = await sequelize.query(`select *
    from CartItems
    where CartItems.cart_id = ${id}`);

    const cartrItemList = await CartItem.findAll({
      where: { cart_id: id },
      include: [
        { model: Product },
        {
          model: Cart,
          include: [{ model: User, as: "user",attributes: [ "user_name"] }],
          attributes: ["total_cart"],
        },
      ],
    });

    if (results.length > 0) {
      res.status(201).send(cartrItemList);
    } else {
      res.status(404).send("There are no products in the cart");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addProductCartItem = async (req, res, next) => {
  const { price_product, quantity, product_id } = req.body;
  const payment_cartItem = price_product * quantity;
  const { id } = req.cart;

  const data = { cart_id: id, product_id, quantity, payment_cartItem };
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
