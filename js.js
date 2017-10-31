
var nameApp = angular.module('nameApp', []);
nameApp.controller('NameCtrl', function ($scope){
    $scope.names = ['cricket', 'basketball', 'Movie'];

    $scope.addName = function() {
        $scope.names.push($scope.enteredName);
        $scope.enteredName = '';
    };

    $scope.removeName = function(name) {
        var i = $scope.names.indexOf(name);
        $scope.names.splice(i, 1);
    };
    $scope.editName=function(name){
        var i=$scope.names.indexOf(name);
        $scope.enteredName=$scope.names[i];
    };
    $scope.update=function(name){
        var u=$scope.names.indexOf(name);
        $scope.names[u]=$scope.enteredName;


    };
});