const { FeedBack, sequelize } = require("../models/index");

const getAllFeedBack = async (req, res) => {
  try {
    const listFeedBack = await FeedBack.findAll();
    res.status(201).send(listFeedBack);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllFeedBackOfProduct = async (req, res) => {
  //username ,avatar,commemt_text,rating
  const { idProduct } = req.query;
  try {
    const [results] =
      await sequelize.query(`select "Users"."user_name","Users"."avatar", "FeedBacks"."comment_text","FeedBacks"."rating"
      from "FeedBacks"
        inner join "Users" on "Users".id = "FeedBacks".user_id
        inner join "Products" on "Products".id = "FeedBacks".product_id
      where "Products".id = ${idProduct};`);

    res.status(200).send(results);
  } catch (error) {}
};

const createFeedback = async (req, res) => {
  const dataFeedback = req.body;
  try {
    const feedback = await FeedBack.create(dataFeedback);
    res.status(201).send(feedback);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const editFeedback = async (req, res) => {
  const { id } = req.params;
  const { comment_text, rating } = req.body;

  try {
    await FeedBack.update(
      { comment_text, rating },
      {
        where: { id },
      }
    );

    const feedbackUpdated = await FeedBack.findOne({ where: { id } });
    res.status(201).send(feedbackUpdated);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteFeedBack = async (req, res) => {
  try {
    const { id } = req.params;
    await FeedBack.destroy({ where: { id } });

    res.status(200).send("Delete feedback successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllFeedBack,
  createFeedback,
  deleteFeedBack,
  editFeedback,
  getAllFeedBackOfProduct,
};
