(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);
    
    // 'item' is injected through state's resolve
    ItemsController.$inject = ['items']
    function ItemsController(items) {
      var itemsCount = this;
      itemsCount.item = items.data.menu_items;
    }
    
    })();