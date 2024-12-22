/**
 * Pollyfill for promise methods
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 2000);
});

// promise.all()
Promise.myAll = function (promiseArray) {
  let resultArr = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, index) => {
      promise
        .then((response) => {
          counter++;
          resultArr[index] = response;
          if (counter === promiseArray.length) {
            resolve(resultArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAll([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
