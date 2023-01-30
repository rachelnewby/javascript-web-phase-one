(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      var add2 = (numberOne, numberTwo) => {
        return numberOne + numberTwo;
      };
      module.exports = add2;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      var multiply2 = (numberOne, numberTwo) => {
        return numberOne * numberTwo;
      };
      module.exports = multiply2;
    }
  });

  // index.js
  var add = require_add();
  var multiply = require_multiply();
  console.log("Hello from the developer console!");
  console.log(new Date());
  var calculation = multiply(add(2, 3), 4);
  console.log(calculation);
})();
