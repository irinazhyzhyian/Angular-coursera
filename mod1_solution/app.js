(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.foodList = "";
      $scope.message = "";
        
      $scope.clean = function () {
        $scope.message = "";
      };
    
      $scope.sayMessage = function () {
        if($scope.foodList==""){
            $scope.message = "Please enter data first";
        } 
        else {
            var list = $scope.foodList.split(',');
            var listCount = 0;
            for(var i=0; i<list.length; ++i){
                if(list[i].replace(/\s+/g, '')!=""){
                    listCount++;
                }
            }
            if(listCount > 3)
                $scope.message = "Too much!";
            else
                $scope.message = "Enjoy!";
        }
      };
    }
    })();
