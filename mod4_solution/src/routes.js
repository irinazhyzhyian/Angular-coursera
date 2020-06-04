(function () {
  'use strict';


  angular.module('MenuApp')
          .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
          //Redirect to home
          $urlRouterProvider.otherwise('/');

          $stateProvider
                  .state('home', {
                          url: '/',
                          templateUrl: 'src/menuapp/templates/home.template.html'
                  })
                  .state('categories', {
                          url: '/categories',
                          controller: 'CategoriesController as categories',
                          templateUrl: 'src/menuapp/templates/categories.component.template.html',
                          resolve: {
                                  items: ['MenuDataService', function (MenuDataService) {
                                                  return MenuDataService.getAllCategories();
                                          }]
                          }
                  })
                  .state('items', {
                          url: '/items/{categoryShortName}',
                          templateUrl: 'src/menuapp/templates/items.component.template.html',
                          controller: 'ItemsController as itemsCont',
                          resolve: {
                                  items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                                                 return MenuDataService.getItemsForCategory($stateParams.categoryShortName);                                                       
                                          }]
                          }
                  });
          
  }
})();