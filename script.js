// Code goes here

//creating a module called display_people
var app = angular.module('display_people', []);

app.controller("peopleController", function($scope, $http) {
    $scope.personArr = [];

    $http.get("people.json").then(function(response) {
        console.log(response.data.People);
        $scope.personArr = response.data.People;
        $scope.detailsToShowObj = $scope.personArr[0];
    });

    $scope.selectPerson = function(index) {
        $scope.detailsToShowObj = $scope.personArr[index];
        console.log($scope.detailsToShowObj);
    }
});
