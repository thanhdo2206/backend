const _ = require("lodash");
const { transpose } = require("mathjs");
const math = require("mathjs");

const normalizeMatrix = (utility_matrix) => {
  let utility_matrix_copy = utility_matrix;
  utility_matrix_copy.forEach((row, indexRow) => {
    const avg = _.mean(row);
    row.forEach((cell, indexCell) => {
      if (cell != 0) {
        row.splice(indexCell, 1, cell - avg);
      }
    });
  });

  return utility_matrix_copy;
};

const cosinesim = (A, B) => {
  let dotproduct = 0;
  let mA = 0;
  let mB = 0;
  for (i = 0; i < A.length; i++) {
    dotproduct += A[i] * B[i];
    mA += A[i] * A[i];
    mB += B[i] * B[i];
  }
  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);
  let similarity = dotproduct / (mA * mB);
  return similarity;
};

const sim = (idUserLogin, arrVectorUser) => {
  let result = [];
  const id = idUserLogin - 1;
    console.log(id);
  const vectorUserRecommend = arrVectorUser[id];
  arrVectorUser.forEach((vector, index) => {
    if (id != index) {
      result.push(cosinesim(vectorUserRecommend, vector));
    } else result.push(1);
  });
  return result;
};

//mảng chứa vị trí những đánh giá missing của user
const filterPositionMissingValue = (utility_matrix, idUserLogin) => {
  let userItemsEmpty = [];
  utility_matrix[idUserLogin - 1].forEach((cell, index) => {
    if (cell == 0) userItemsEmpty.push(index);
  });

  return userItemsEmpty;
};

//mảng chứa vị trí, giá trị rating,sim những user đã đánh giá item
const filterUserRatingItem = (utility_matrix, indexUserItem, arrSim) => {
  const utility_matrix_transpose = math.transpose(utility_matrix);
  let userItemIndexs = [];
  let userItemRatings = [];

  utility_matrix_transpose[indexUserItem].forEach((cell, index) => {
    if (cell != 0) {
      userItemIndexs.push(index);
      userItemRatings.push(cell);
    }
  });

  const arrUserRatingItem = [];
  for (i = 0; i < userItemRatings.length; i++) {
    let indexInArrSim = userItemIndexs[i];
    let obj = { sim: arrSim[indexInArrSim], rating: userItemRatings[i] };
    arrUserRatingItem.push(obj);
  }

  console.log("arrUserRatingItem",arrUserRatingItem);

//   arrUserRatingItem [
//     { sim: 0.8570745344089282, rating: 3 },
//     { sim: 0.2300894966542111, rating: 4 }
//   ]
  return arrUserRatingItem;
};

const random = (min, max) =>
        Math.floor(Math.random() * (max - min)) + min;

module.exports = {
  normalizeMatrix,
  cosinesim,
  sim,
  filterPositionMissingValue,
  filterUserRatingItem,
  random
};
