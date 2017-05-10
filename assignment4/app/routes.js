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
      controller: 'CategoriesController as list'
    })
    .state('items', {
      url: '/items/:categoryShortName',
      controller: 'CategoryInfoController as category',
      templateUrl: 'app/categories/show.html'
    });
}
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('MenuApp')
  .config(RoutesConfig);
})();
