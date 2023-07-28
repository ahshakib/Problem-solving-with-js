function add(x) {
  return x * 10 - 10;
}

const memo = (func) => {      // this memo function is higher order function because it returns another function and it has a function parameter
  let cache = {};

  return function (x) {       // this is closure
    if (cache[x]) {
      console.log("calculating from cache...");
      return cache[x];
    } else {
      console.log("calculating from result...");
      const result = func(x);
      cache[x] = result;
      return result;
    }
  };
};

const calculate = memo(add);    

console.log(calculate(10));     // calculating from result...
                                // 90
console.log(calculate(10));     // calculating from cache...
                                // 90
console.log(calculate(10));     // calculating from cache...
                                // 90
