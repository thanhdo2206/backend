const { User,Product,sequelize } = require("../models/index");
const {
  normalizeMatrix,
  sim,
  filterPositionMissingValue,
  filterUserRatingItem,
  random,
} = require("../utils/recommend");
const math = require("mathjs");

const getAllProductRecommend = async (req, res) => {
  const userLogin = req.user;
  try {
    const [result] = await sequelize.query(
      `SELECT FeedBacks.user_id,FeedBacks.product_id,FeedBacks.rating FROM FeedBacks`
    );
    // result [
    //     { user_id: 2, product_id: 1, rating: 5 },
    //     { user_id: 2, product_id: 2, rating: 3 },
    //     { user_id: 3, product_id: 2, rating: 5 }
    //   ]
    // console.log(result);
    const data = result.map((feedback) => {
      const { user_id, product_id, rating } = feedback;
      let row = [user_id - 1, product_id - 1, rating];
      return row;
    });
    // console.log("data",data);

    const n_users = await User.count();
    const n_items = await Product.count();;
    const hang = n_users;
    const cot = n_items;

    //ma trận ban đầu
    let UM = math.zeros(hang, cot)._data;
    data.forEach((row) => {
      const [i, j, value] = row;
      UM[i][j] = value;
    });
    // console.log("UM",UM);

    const arrSim = sim(userLogin.id, UM);
    // console.log("arrSim",arrSim);
    // [ 1, 0.8570745344089282, 0.6726727939963124, 0.2300894966542111 ]
    //mảng chứa vị trí những đánh giá missing của user
    let userItemsEmpty = filterPositionMissingValue(UM, userLogin.id);
    userItemsEmpty.forEach((indexUserItem, index) => {
      const arrUserRatingItem = filterUserRatingItem(UM, indexUserItem, arrSim);
      const arrUserRatingItemSort = arrUserRatingItem.sort(
        (a, b) => b.sim - a.sim
      );
      // chọn k user
      // console.log("arrUserRatingItem.length", arrUserRatingItem.length);
      if (arrUserRatingItem.length != 0) {
      }
      const kRandom = random(1, arrUserRatingItem.length);
      // console.log("kRandom", kRandom);

      //chọn k user từ mảng user có đánh giá item
      const arrChoosed = arrUserRatingItemSort.slice(0, kRandom);

      //tính ratingRecommend
      let ratingRecommendNumerator = 0;
      let ratingRecommendDenominator = 0;
      arrChoosed.forEach((item) => {
        ratingRecommendNumerator += item.sim * item.rating;
        ratingRecommendDenominator += Math.sqrt(item.sim);
      });

      let ratingRecommend =
        ratingRecommendNumerator / ratingRecommendDenominator;
      //Gán chỗ miss đoán giá trị rating phỏng đoán
      UM[userLogin.id - 1][indexUserItem] = ratingRecommend;
    });

    const arrRatingClone = [];
    UM[userLogin.id - 1].forEach((item, index) => {
      const obj = { rating: item, idProduct: index+1 };
      arrRatingClone.push(obj);
    });
    const arrRatingOfUserLogin = arrRatingClone.sort(
      (a, b) => b.rating - a.rating
    );
    // console.log("arrRatingOfUserLogin", arrRatingOfUserLogin);

    res.status(200).send(arrRatingOfUserLogin);
  } catch (error) {
    res.status(500).send(error.message);

    console.log("error", error.message);
  }
};

module.exports = { getAllProductRecommend };
