'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MainCtrl', function ($scope,AppService) {
    $scope.data =[];
    $scope.getStudent = function () {
      AppService.findAllStudent().then(
        function (response) {
          console.log(response);
          $scope.data = response;
        },
        function () {
          console.log('Failure');
        }
      );
    };
    $scope.insertStudent=function () {
      $scope.insertdata={
        name:'test',
        address:'brt',
        std:'degree'
      };
      AppService.insertStudentData(insertdata);

    };
  });

