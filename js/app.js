"use strict";

var budgetApp = angular.module("budgetApp", ['ui.router']);

budgetApp.config(function($stateProvider) {
    $stateProvider
        .state('budgetForm', { url: '/budget-form', templateUrl: 'html/budget-form.html', controller: 'budgetFormCtrl'})
        .state('budgetList', { url: '/budget-list', templateUrl: 'html/budget-list.html', controller: 'budgetListCtrl'})
        .state('error', { url: '/budgetForm', templateUrl: 'html/budget-form.html', controller: 'budgetCtrl'})

}).controller("appCtrl", function($scope, $state) {

  $scope.init = function (){
    $state.go("budgetList");
  };

});
