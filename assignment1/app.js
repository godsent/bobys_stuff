(function() {
  'use strict';

  function Checker(foodList) {
    this.maxFood = 3;
    this.foodLength = this.calculateLength(foodList);
  };

  Checker.prototype.calculateLength = function(string) {
    if (string.length == 0) {
      return 0;
    }

    var count = 0,
        parts = string.split(',');

    for(var i = 0; i < parts.length; i++) {
      if (parts[i].match(/\w/)) {
        count += 1;
      }
    }

    return count;
  };

  Checker.prototype.isTooMuch = function() {
    return this.foodLength > this.maxFood;
  };

  Checker.prototype.isEmpty = function() {
    return this.foodLength == 0;
  };

  Checker.prototype.message = function() {
    if (this.isEmpty()) {
      return 'Please enter data first';
    } else if (this.isTooMuch()) {
      return 'Too much!';
    } else {
      return 'Enjoy!';
    }
  };

  Checker.prototype.color = function() {
    if (this.isEmpty()) {
      return 'red';
    } else {
      return 'green';
    }
  };

  function CheckerController($scope) {
    $scope.checkFood = function() {
      var checker = new Checker($scope.foodList || '');
      $scope.message = checker.message();
      $scope.color = checker.color();
    };
  }

  CheckerController.$injector = ['$scope'];
  angular.module('Checker', []).controller('CheckerController', CheckerController);
})();
