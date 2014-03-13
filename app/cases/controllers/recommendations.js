'use strict';
/**
 * Child of DetailsController
 **/

angular.module('RedhatAccessCases')
.controller('RecommendationsController', [
  '$scope',
  function ($scope) {
    $scope.itemsPerPage = 4;
    $scope.maxSize = 10;

    $scope.selectPage = function(pageNum) {
      var start = $scope.itemsPerPage * (pageNum - 1);
      var end = start + $scope.itemsPerPage;
      end = end > $scope.recommendations.length ?
              $scope.recommendations.length : end;

      $scope.recommendationsOnScreen =
        $scope.recommendations.slice(start, end);

      console.log($scope.recommendations);
      console.log($scope.recommendationsOnScreen);
    };

    $scope.selectPage(1);
  }]);
