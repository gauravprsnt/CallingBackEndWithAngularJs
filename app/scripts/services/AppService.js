'use strict';

angular.module('myAppApp')
  .service('AppService', ['Restangular',
    function (Restangular) {
      var student = Restangular.all('students');
      return {
        findAllStudent: function () {
          return student.getList();
        },

        insertStudentData: function (insertdata) {
          return student.post(insertdata);

        },

        findOneStudent: function (studentId) {
          return Restangular.one('students', studentId).get();
        },

        updateSingleStatus: function (studentId) {
          return Restangular.one('students', studentId).one('delete').put();

        },

        updateStudent:function (student) {
          console.log(student);
          console.log(student.id);
          var url=Restangular.one('students',student.id);
          url.customPUT(student);
        }

      };
    }]);
