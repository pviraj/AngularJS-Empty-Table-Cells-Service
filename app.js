var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http, factoryGetJSONFile, serviceEmptyCells, serviceLast12Months) {
  factoryGetJSONFile.getMyData(function(data) {
    $scope.Accounts = data.Accounts;
  });

  $scope.getEmptyCells = serviceEmptyCells.getEmptyCells;
  $scope.getLast12Months = serviceLast12Months.getLast12Months();

});


app.factory('factoryGetJSONFile', function($http) {
  return {
    getMyData: function(done) {
      $http.get('myJSONFile.json')
        .success(function(data) {
          done(data);
        })
        .error(function(error) {
          alert('An error occured whilst trying to retrieve your data');
        });
    }
  }
});

app.factory('serviceEmptyCells', function() {
  return {
    getEmptyCells: function(len) {
      var emptyCells = [];
      for (var i = 0; i < 12 - len; i++) {
        emptyCells.push(i);
      }
      return emptyCells;
    }
  };
});

app.factory('serviceLast12Months', function() {
  return {
    getLast12Months: function() {
      var date = new Date();
      var months = [],
        monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      for (var i = 0; i < 12; i++) {
        months.push(monthNames[date.getMonth()] + ' ' + date.getFullYear());
        date.setMonth(date.getMonth() - 1);
      }
      return months;
    }
  };
});
