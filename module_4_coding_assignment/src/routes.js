(function () {
'use strict';

angular.module('Data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/data/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.html',
    controller: 'CategoriesController as catgy',
    resolve: {
      category_list: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
          .then(function (result) {
            return result.data;
          });
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/data/templates/items.template.html',
    controller: "ItemsController as its",
    resolve: {
      item_list: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
          .then(function (result) {
            return result.data.menu_items;
          });
      }]
    }
  });

}

})();
