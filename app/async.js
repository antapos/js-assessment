if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = new $.Deferred();
      deferred.resolve(value);
      return deferred.promise();
    },

    manipulateRemoteData : function(url) {
      var deferred = new $.Deferred();
      $.ajax(url).then(function(response) {
        var names = response.people.map(function(obj) {
          return obj.name;
        });
        names.sort();
        deferred.resolve(names);
      });
      return deferred.promise();
    }
  };
});
