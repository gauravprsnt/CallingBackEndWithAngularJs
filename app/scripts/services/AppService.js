'use strict';

angular.module('myAppApp')
  .service('AppService',['Restangular',
    function (Restangular) {
     var student=Restangular.all('students');
      return {
        findAllStudent: function () {
          return student.getList();
        },

        insertStudentData: function (insertdata) {
         student.post(insertdata);
        }

      };
    }]);
