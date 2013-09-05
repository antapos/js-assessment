if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    argsAsArray: function (fn, arr) {
      return fn.apply(null, arr);
    },

    speak: function (fn, obj) {
      return fn.apply(obj);
    },

    functionFunction: function (str) {
      return function (str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures: function (arr, fn) {
      return arr.map(function (el) {
        return function () {
          return fn(el);
        };
      });
    },

    partial: function (fn, str1, str2) {
      return function (str3) {
        return fn(str1, str2 + str3.substring(0, str3.length - 1));
      };
    },

    useArguments: function () {
      var i=0,
        sum=0;
      for(; i<arguments.length; i++) {
        sum += arguments[i];
      }
      return sum;
    },

    callIt: function (fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null, args);
    },

    partialUsingArguments: function (fn) {
      var aArgs = Array.prototype.slice.call(arguments, 1);
      return function() {
        return fn.apply(null, aArgs.concat(Array.prototype.slice.call(arguments)));
      };
      // the above is the same as:
      /*
      return Function.prototype.bind.apply(fn, Array.prototype.slice.call(arguments));
      */
      // what do you prefer?
    },

    curryIt: function (fn) {
      var accumulatedArgs = [];
      var expectedArgsLength = fn.length;
      function accumulateArgs() {
        return function(currentArg) {
          accumulatedArgs.push(currentArg);
          if (accumulatedArgs.length === expectedArgsLength) {
            return fn.apply(null, accumulatedArgs);
          } else {
            return accumulateArgs();
          }
        };
      }
      return accumulateArgs();
    }
  };
});
