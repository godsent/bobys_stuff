(function() {
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/index.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'app/categories/index.html',
      controller: 'CategoriesController as list',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories()
        }]
      }
    })
    .state('items', {
      url: '/items/:categoryShortName',
      controller: 'CategoryInfoController as category',
      templateUrl: 'app/categories/show.html',
      resolve: {
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }],
        name: ['$stateParams', function($stateParams) {
          return $stateParams.categoryShortName;
        }]
      }
    });
}
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('MenuApp')
  .config(RoutesConfig);
})();
