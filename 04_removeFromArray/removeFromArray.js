// const removeFromArray = function (arr, ...item) {
//   //let compareArr = [...item];
//   let newArr = [];
//   arr.forEach((item) => {
//     if (!args.includes(item)) {
//       newArr.push(item);
//     }
//     //return newArr;
//   });
//   return newArr;
// };

// let index = [];
// let other_items = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === item) {
//     index.push(item);
//   } else {
//     other_items.push(arr[i]);
//   }
// }
// return other_items;
//};

const removeFromArray = function (arr, ...args) {
  let newArr = arr.filter((item) => item != args.includes(item));
  return newArr;
};

//console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
