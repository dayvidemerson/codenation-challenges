"use strict";

const fibonacci = () => {
  const fibonacciRecursive = (before = 0, next = 1) => {
    return [before].concat(
      before < 350 ? fibonacciRecursive(next, before + next) : []
    );
  };
  return fibonacciRecursive();
};

const isFibonnaci = (num) => {
  return fibonacci().includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
