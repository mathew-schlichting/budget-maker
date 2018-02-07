"use strict";

var budgetApp = angular.module("budgetApp", ['ui.router', 'ngMaterial', 'components']);

budgetApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/errorView');
    $stateProvider
        .state('budgetForm', { url: '/budgetForm', templateUrl: '../html/budget-form.html', controller: 'budgetCtrl'})
        .state('errorView',  { url: '/errorView', templateUrl: '../html/error.html'})

}).controller("appCtrl", function($scope) {

  $scope.init = function (){
    alert(1);
  };

});
