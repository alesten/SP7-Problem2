angular.module('examApp', [])
    .directive('studentGrades', function(){
        return {
            restrict: 'EA',
            templateUrl: 'studentGrades.html',
            controller: 'ExamController'
        };
    })
    .factory('MyFactory', function(){
        return{
            getStudentsInfo: function($log){
                var studentsInfo = {};
                studentsInfo.allCourses = [
                    {courseId: 1000, courseName: "Basic Programming"},
                    {courseId: 1001, courseName: "Advanced Programming"},
                    {courseId: 1003, courseName: "DataBase Intro"}];
                studentsInfo.students = [];
                studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
                studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
                studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
                studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
                return studentsInfo;
            }
        };
    })
    .filter('average', function () {
        return function(input){
            var total = 0;
            var count = 0;
            for(var i = 0; i < input.length; i++){
                if(angular.isDefined(input[i].grade)){
                    total += parseInt(input[i].grade);
                    count ++;
                }
            }
            return total / count;
        }
    })
    .controller('ExamController', ['$scope', 'MyFactory', function ($scope, MyFactory) {
            $scope.studentsInfo = MyFactory.getStudentsInfo();
    }]);