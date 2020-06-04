(function () {
    'use strict';
    
    angular.module('data')
    .component('itemsComponent', {
      templateUrl: 'src/menuapp/templates/items.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();