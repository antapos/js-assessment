if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return (num & (1 << (bit - 1))) >> (bit - 1);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      return ('00000000' + (num).toString(2)).substr(-8);
    },

    multiply: function(a, b) {
      //TODO: find decimal places to find multiplier/divider for each operand
      var multiplier = 10000;
      return (a*(b*multiplier))/multiplier;
    }
  };
});

