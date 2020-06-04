(function () {
    'use strict';
    
    angular.module('Data')
    .component('itemsComponent', {
      templateUrl: 'src/menuapp/templates/items.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();