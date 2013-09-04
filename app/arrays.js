if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    indexOf: function (arr, item) {
      return arr.indexOf(item);
    },

    sum: function (arr) {
      var total = 0;
      arr.forEach(function (number) {
        total += number;
      });
      return total;
    },

    remove: function (arr, item) {
      var copy = [];
      arr.forEach(function (el) {
        if (el !== item) {
          copy.push(el);
        }
      });
      return copy;
    },

    removeWithoutCopy: function (arr, item) {
      var i;
      while ((i = arr.indexOf(item)) > 0) {
        arr.splice(i, 1);
      }
      return arr;
    },

    append: function (arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function (arr) {
      arr.pop();
      return arr;
    },

    prepend: function (arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail: function (arr) {
      arr.shift(arr);
      return arr;
    },

    concat: function (arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function (arr, item) {
      var count = 0;
      arr.forEach(function (el) {
        if (el === item) {
          count++;
        }
      });
      return count;
    },

    duplicates: function (arr) {
      var explored = {};
      var duplis = [];
      arr.forEach(function (el) {
        if (explored.hasOwnProperty(el) && explored[el] === 1) {
          duplis.push(el);
          explored[el] += 1;
        } else {
          explored[el] = 1;
        }
      });
      return duplis;
    },

    square: function (arr) {
      return arr.map(function (el) {
        return el * el;
      });
    },

    findAllOccurrences: function (arr, target) {
      var result = [];
      for(var i=0; i<arr.length; i++) {
        if (arr[i] === target) {
          result.push(i);
        }
      }
      return result;
    }
  };
});
