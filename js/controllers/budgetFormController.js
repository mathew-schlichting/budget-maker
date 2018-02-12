function budgetFormControllerFunction($scope) {

  $scope.budgets = null;


  $scope.loadBudgets = function (){
    //todo
    $scope.budgets = budgets;
  }

}

budgetApp.controller('budgetFormCtrl', budgetFormControllerFunction);
