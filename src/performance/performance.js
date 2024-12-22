// debounce and throttle pollyfills

const expensive = (name) => {
  console.log(`I am ${name}`);
};
const debounceBtnEle = document.querySelector(".debounce");
const throttleBtnEle = document.querySelector(".throttle");

// debounce
function myDebounce(cb, d) {
  // great ex of closure, the timer var goes with the return function
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
}
const debouncedExpensiveFn = myDebounce(expensive, 1000);
debounceBtnEle.addEventListener("click", () => {
  debouncedExpensiveFn("debounce");
});

// throttle
function myThrottle(cb, d) {
  let shouldWait = false;
  return function (...args) {
    if (shouldWait) return;

    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, d);
  };
}

const throttledExpensiveFn = myThrottle(expensive, 2000);

throttleBtnEle.addEventListener("click", () => {
  throttledExpensiveFn("throttle");
});
