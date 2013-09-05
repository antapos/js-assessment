if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return !!str.match(/\d/);
    },

    containsRepeatingLetter : function(str) {
      return !!str.match(/([a-zA-Z])\1/g);
    },

    endsWithVowel : function(str) {
      return !!str.match(/[aeiouAEIOU]$/);
    },

    captureThreeNumbers : function(str) {
      var found = str.match(/\d{3}/);
      return found ?  found[0] : false;
    },

    matchesPattern : function(str) {
      return !!str.match(/^\d{3}\-\d{3}\-\d{4}$/);
    },

    isUSD : function(str) {
      return !!str.match(/^\$\d+([,]\d{3})*([.]\d{2})?$/);
    }
  };
});
