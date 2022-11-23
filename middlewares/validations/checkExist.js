const bcrypt = require("bcrypt");

const checkExistByUserName = (Model) => {
  return async (req, res, next) => {
    const { userName, password } = req.body;

    const dataFind = await Model.findOne({
      where: { user_name: userName },
    });

    if (dataFind) {
      req.user = dataFind;
      next();
    } else res.status(404).send("Not found !");
  };
};

const checkPassword = (req, res, next) => {
  const { user } = req;
  const { password } = req.body;

  const isAuth = bcrypt.compareSync(password, user.password);

  if (isAuth) {
    next();
  } else res.status(201).send("Password incorrect!");
};

module.exports = { checkExistByUserName, checkPassword };
