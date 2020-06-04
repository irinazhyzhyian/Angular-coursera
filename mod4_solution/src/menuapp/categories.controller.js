(function () {
    'use strict';
    
    angular.module('data')
    .controller('CategoryController', CategoryController);
    
    
    CategoryController.$inject = ['items'];
    function CategoryController(items) {
      var categories = this;
      categories.items = items.data;
      
    }
    
    })();