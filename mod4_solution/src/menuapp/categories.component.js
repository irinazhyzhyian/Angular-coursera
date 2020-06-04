(function () {
    'use strict';
    
    angular.module('Data')
    .component('categoriesList', {
      templateUrl: 'src/menuapp/templates/categories.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();