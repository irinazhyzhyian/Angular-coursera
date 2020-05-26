(function(){

    'use strict'
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);


function FoundItems() {
    var ddo = {
        scope: {
          found: '<',
          onRemove: '&'
        },
        controller: NarrowItDownController,
        controllerAs: 'NIDcontroller',
        bindToController: true,
        transclude: true,
        templateUrl: 'foundItems.html'
      };
    
      return ddo;
}

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
    
        //this.found = [];
        this.getFound = function(searchTerm){
            //this.found = MenuSearchService.getMatchedMenuItems(searchTerm);
            //var foundIt = Promise.resolve(MenuSearchService.getMatchedMenuItems(searchTerm));
            Promise.resolve(MenuSearchService.getMatchedMenuItems(searchTerm)).then(value=>this.found=value);
            //console.log(this.found);
            
            //return this.found;
        };

        this.removeItem = function (itemIndex) {
            this.found.splice(itemIndex, 1);
          };
        
    }

    MenuSearchService.$inject=['$http'];
    function MenuSearchService($http){
        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: 'GET',
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            }).then(function (result) {
                var foundItems=[];
                var array = result.data;
                angular.forEach(array['menu_items'], function(value, key){
                    if(value.description.includes(searchTerm)){
                        foundItems.push(value);
                    }
                });
                return foundItems;
            });
        };
        
    }

})();