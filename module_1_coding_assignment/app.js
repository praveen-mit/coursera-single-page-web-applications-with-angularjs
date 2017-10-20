(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunch_menu = "";
  $scope.check_text = "";
  $scope.color = "";
  $scope.check = function () {
    var split_lunch = $scope.lunch_menu.split(',');
    var non_empty_split_lunch = [];
    for (var i = 0; i < split_lunch.length; i++) {
      if (split_lunch[i].trim().length > 0) {
        non_empty_split_lunch.push(split_lunch[i]);
      }
    }
    if (non_empty_split_lunch.length > 0) {
      $scope.color = "green";
      if (non_empty_split_lunch.length <= 3) {
        $scope.check_text = "Enjoy!";
      }
      else {
        $scope.check_text = "Too much!";
      }
    }
    else {
      $scope.color = "red";
      $scope.check_text = "Please enter data first";
    }
  }
}

})();
