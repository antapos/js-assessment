if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var files = [];
      function scan(folder, filter) {
        folder.files.forEach(function(fileOrDir) {
          if (!filter || fileOrDir.dir === filter) {
            if (typeof fileOrDir === 'object') {
              scan(fileOrDir);
            } else {
              files.push(fileOrDir);
            }
          }
        });
      }
      scan(data, dirName);
      return files;
    },

    permute: function(arr) {
      var result = [],
        explored = [];
      function accumulate(input) {
        var i, ch;
        for (i=0; i<input.length; i++) {
          ch = input.splice(i, 1)[0];
          explored.push(ch);
          if (input.length === 0) {
            result.push(explored.slice());
          }
          accumulate(input);
          input.splice(i, 0, ch);
          explored.pop();
        }
        return result;
      }
      return accumulate(arr);
    }
  };
});
