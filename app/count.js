if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var counter = {
        cancelRequested: false,
        cancel: function() {
          counter.cancelRequested = true;
        },
        iterate: function(current, end) {
          if (counter.cancelRequested) {
            return;
          }
          console.log(current);
          if (current < end) {
            setTimeout(function() {
              counter.iterate(current+1, end);
            }, 100);
          }
        }
      };
      counter.iterate(start, end);
      return counter;
    }
  };
});