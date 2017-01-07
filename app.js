(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foodItems = "";
  $scope.message = "";

  $scope.checkMeal = function(){
        $scope.items = $scope.foodItems.split(',');
      }
}

})();
