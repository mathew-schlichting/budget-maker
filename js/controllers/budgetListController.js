function budgetListControllerFunction($scope) {

  $scope.init = function (){
    console.log("Version: 0.0.1")
    console.log("init budget list")
  }


  $scope.budgets = null;


  $scope.loadBudgets = function (){
    //todo
    $scope.budgets = budgets;
  }


}

budgetApp.controller('budgetListCtrl', budgetListControllerFunction);
