'use strict';
angular.module('RedhatAccess.cases').directive('rhaAccountselect', function () {
    return {
        templateUrl: 'cases/views/accountSelect.html',
        restrict: 'A',
        controller: 'AccountSelect'
    };
});