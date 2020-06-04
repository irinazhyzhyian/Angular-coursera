(function () {
    'use strict';
    
    angular.module('Data')
    .controller('ItemsController', ItemsController);
    
    // 'item' is injected through state's resolve
    ItemsController.$inject = ['items']
    function ItemsController(items) {
      var itemsCount = this;
      itemsCount.items = items.data.menu_items;
    }
    
    })();