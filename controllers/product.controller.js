const { Product, Category } = require("../models/index");

const getAllPoduct = async (req, res) => {
  try {
    const listProduct = await Product.findAll({
      include: [{ model: Category }],
    });
    res.status(200).send(listProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailPoduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id },
      include: [{ model: Category }],
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createProduct = async (req, res) => {
  const { file } = req;
  const urlImage = `https://economic.onrender.com/${file.path}`;
  const dataContent = req.body;

  try {
    const newProduct = await Product.create({
      ...dataContent,
      image: urlImage,
    });
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productDeleted = await Product.destroy({ where: { id } });

    res.status(200).send("Delete product successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { file } = req;

  // const urlImage = file ? `http://localhost:8000/${file.path}` : "";

  const urlImage = file ? `https://economic.onrender.com/${file.path}` : "";

  const dataContent = req.body;

  const productEdit = urlImage
    ? {
        ...dataContent,
        image: urlImage,
      }
    : dataContent;

  try {
    await Product.update(
      {
        ...productEdit,
      },
      {
        where: { id },
      }
    );
    const productUpdated = await Product.findOne({ where: { id } });
    res.status(200).send(productUpdated);

    // res.status(201).send("ok");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const changeStatusProduct = async (req, res) => {
  const { id } = req.params;
  const {status_number} = req.body;
  console.log("status_number",status_number);

  try {
    await Product.update(
      {
        status_number,
      },
      {
        where: { id },
      }
    );

    const productUpdated = await Product.findOne({ where: { id } });
    res.status(200).send(productUpdated);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllPoduct,
  getDetailPoduct,
  createProduct,
  deleteProduct,
  updateProduct,
  changeStatusProduct
};
