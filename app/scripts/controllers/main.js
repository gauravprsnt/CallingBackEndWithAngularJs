'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MainCtrl', function ($scope, AppService) {
    $scope.btn = false;
    $scope.btn11 = false;
    $scope.msg= false;
    $scope.edit=[];


    $scope.getStudent = function () {
      $scope.data = [];
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

    $scope.insertStudent = function () {
      $scope.data = [];
      $scope.msg= true;
      $scope.btn = false;
      $scope.insertdata = {
        name: $scope.abc,
        address: $scope.def,
        std: $scope.mayap
      };
      AppService.insertStudentData($scope.insertdata).then(
        function (response) {
          $scope.msg= true;
          console.log(response);
          $scope.data.push(response);
          $scope.insertdata = {
            name:'',
            address:'',
            std:''
          };

        },
        function () {
          console.log('Failure');
        }
      );


    };

    $scope.searchOne = function () {
      $scope.data = [];
      $scope.btn11 = false;
      AppService.findOneStudent($scope.studentId).then(
        function (response) {
          console.log(response);
          $scope.data.push(response);
        }
      );
      $scope.studentId = '';
    };

    $scope.updateStatus = function (studentId) {
      $scope.data = [];
      AppService.updateSingleStatus(studentId).then(
        function (response) {
          console.log(response);
          $scope.data.push(response);
        }

      );
    };


    $scope.saveEditedData=function (index,student) {
      console.log(student);
      console.log(student.id);
      // student={
      //   id:student.id,
      //   name:$scope.edname,
      //   address:'efgh',
      //   std:'adasdf',
      //   status:student.status
      // };
      console.log(student);

      AppService.updateStudent(student);
      $scope.edit[index] =false;

    };


    $scope.bottonClicked = function () {
      $scope.btn = true;
    };

    $scope.bottonClickedOne = function () {
      $scope.btn11 = true;
    };

    $scope.triggerEditMode = function (index) {
      $scope.edit[index] =true;
    };

    $scope.removeEditMode = function (index) {
      $scope.edit[index] =false;
    };

    $scope.disbleAdd=function () {
      $scope.btn=false;
    }

  });

