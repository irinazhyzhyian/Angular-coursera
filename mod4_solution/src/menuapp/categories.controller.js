(function () {
    'use strict';
    
    angular.module('Data')
    .controller('CategoriesController', CategoryController);
    
    
    CategoryController.$inject = ['items'];
    function CategoryController(items) {
      var categories = this;
      categories.items = items.data;
      console.log(categories.items);
      
      
    }
    
    })();